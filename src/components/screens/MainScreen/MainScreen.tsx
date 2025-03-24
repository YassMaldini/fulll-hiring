import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { StyleSheet, TextInput as RNTextInput, View, Alert } from "react-native"
import TextInput from "../../designSystem/TextInput/TextInput"
import MainHeader from "./MainHeader/MainHeader"
import { SearchUserResponse, SearchUsersParams } from "../../../api/queries/searchUsers.types"
import { searchUsers } from "../../../api/queries/searchUsers"
import { MainScreenContext } from "./MainScreen.context"
import MainContent from "./MainContent/MainContent"
import { theme } from "../../../utils/theme/theme"
import Button from "../../designSystem/Button/Button"
import Icon from "@react-native-vector-icons/ionicons"

export const DEFAULT_ITEMS_PER_PAGE = 10

export const IS_INFINITE_SCROLL_ENABLED = false

export default () => {

  const inputRef = useRef<RNTextInput>(null)
  
  const [searchText, setSearchText] = useState<string>()

  const [searchParams, setSearchParams] = useState<Pick<SearchUsersParams, 'page' | 'perPage'>>({
    page: 0,
    perPage: DEFAULT_ITEMS_PER_PAGE
  })
  const [searchResult, setSearchResult] = useState<SearchUserResponse>()
  
  const [isEditable, setEditable] = useState<boolean>(true)

  const fetchUserQuery = useCallback(async (text: string) => {
    const { data, headers, status } = await searchUsers({ text, ...searchParams })
    
    if (status === 200) {
      setSearchResult(data)
    } else if (status === 403) {
      const remainingQueries = headers.get('x-ratelimit-remaining')
      if (remainingQueries && parseInt(remainingQueries) === 0) {
        Alert.alert('Github API rate limit reached')
      }
    }
  }, [searchParams])

  // refetch when search params change
  useEffect(() => {
    if (IS_INFINITE_SCROLL_ENABLED && searchText) {
      fetchUserQuery(searchText)
    }
  }, [searchParams])

  // useEffect(() => {
  //   console.log('searchResult', searchResult)
  // }, [searchResult])

  const contextValue = useMemo(() => ({
    searchResult,
    setSearchResult,
    isEditable,
    setEditable,
    searchParams,
    setSearchParams
  }), [
    searchResult,
    setSearchResult,
    isEditable,
    setEditable,
    searchParams,
    setSearchParams
  ])

  return (
    <MainScreenContext.Provider value={contextValue}>
      <View style={style.container}>
        <MainHeader />
        <View style={style.main}>
          <TextInput
            ref={inputRef}
            style={{
              marginBottom: theme.spacing.l
            }}
            onChangeText={(text) => {
              setSearchText(text)
              fetchUserQuery(text)
            }}
          />

          <View style={{ 
            flexDirection: 'row', 
            // justifyContent: 'center',
            marginBottom: theme.spacing.l
          }}>
            <Button 
              color={!isEditable ? 'primary' : 'danger'}
              icon={<Icon name="create-outline" size={24} color="#fff" />}
              onPress={() => setEditable(value => !value)}
            >
              {!isEditable ? 'Enable edit mode' : 'Disable edit mode'}
            </Button>
          </View>

          <MainContent />
        </View>
      </View>
    </MainScreenContext.Provider>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    paddingVertical: theme.spacing.l,
    paddingHorizontal: theme.spacing.m
  }
})