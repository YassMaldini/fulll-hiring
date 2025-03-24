import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import CheckBox from "../../../../designSystem/CheckBox/CheckBox"
import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import Icon from "@react-native-vector-icons/ionicons"
import { MainScreenContext } from "../../MainScreen.context"
import { SearchUserResponse } from "../../../../../api/queries/searchUsers.types"
import { theme } from "../../../../../utils/theme/theme"

export default () => {

  const { searchResult, setSearchResult, isEditable } = useContext(MainScreenContext)

  const selectedItemsCount = useMemo(() => {
    return searchResult?.items.filter(({ checked }) => Boolean(checked)).length
  }, [searchResult])

  const [isSelectAllChecked, setSelectAllChecked] = useState<boolean>(false)

  useEffect(() => {
    if (searchResult) {
      const updatedSearchResultItems = searchResult?.items.map((item) => {
        return {
          ...item,
          checked: Boolean(isSelectAllChecked)
        }
      })
      const updatedSearchResult: SearchUserResponse = {
        ...searchResult,
        items: updatedSearchResultItems
      }

      setSearchResult(updatedSearchResult)
    }
  }, [isSelectAllChecked])

  useEffect(() => {
    if (!Boolean(selectedItemsCount)) {
      setSelectAllChecked(false)
    }
  }, [selectedItemsCount])

  const handleDuplicate = useCallback(() => {
    if (searchResult) {

      const selectedItems = searchResult?.items.filter(item => Boolean(item.checked))

      const updatedSearchResultItems = searchResult.items.map(item => ({
        ...item,
        // uncheck the selected items
        checked: false
      }))

      selectedItems?.map(item => {
        updatedSearchResultItems?.push({
          ...item,
          // change node_id to prevent key duplication issue
          node_id: `${item.node_id}-duplicate-${Date.now()}`,
          // prevent check the cloned items
          checked: false
        })
      })

      const updatedSearchResult: SearchUserResponse = {
        ...searchResult,
        items: updatedSearchResultItems
      }

      setSearchResult(updatedSearchResult)

    }

  }, [searchResult])

  const handleRemove = useCallback(() => {
    if (searchResult) {

      const selectedItemsNodeIds = searchResult?.items
        .filter(item => Boolean(item.checked))
        .map(({ node_id }) => node_id)

      const filteredSearchResultItems = searchResult.items.filter(({ node_id }) => !selectedItemsNodeIds.includes(node_id))

      const updatedSearchResult: SearchUserResponse = {
        ...searchResult,
        items: filteredSearchResultItems
      }

      setSearchResult(updatedSearchResult)

    }

  }, [searchResult])

  return (
    <View style={[style.listHeader, ((!searchResult || !isEditable) && { display: 'none' })]}>
      <View style={style.listHeaderSidedElement}>
        <CheckBox
          value={isSelectAllChecked}
          onValueChange={setSelectAllChecked}
          icon={<Icon name="remove" size={18} color="#fff" />}
          disabled={!isEditable}
          testID="selectAllCheckbox"
        />
        <Text testID="selectedElementsCount" style={{ fontSize: 18 }}>
          <Text style={{ fontWeight: 'bold' }}>{selectedItemsCount || 0}</Text> elements selected
        </Text>
      </View>
      {Boolean(selectedItemsCount) &&
        <View style={[style.listHeaderSidedElement]}>
          <TouchableOpacity
            testID="copyAction"
            onPress={handleDuplicate}
          >
            <Icon name="copy-outline" size={24} color={theme.colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            testID="removeAction"
            onPress={handleRemove}
          >
            <Icon name="trash-outline" size={24} color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

const style = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.m
  },
  listHeaderSidedElement: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: theme.spacing.m
  }
})