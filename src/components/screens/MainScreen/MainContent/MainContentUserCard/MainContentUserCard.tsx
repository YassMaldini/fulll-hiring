import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { MainContentCardProps } from "./MainContentUserCard.types";
import CheckBox from "../../../../designSystem/CheckBox/CheckBox";
import { useCallback, useContext } from "react";
import { MainScreenContext } from "../../MainScreen.context";
import { SearchUserResponse } from "../../../../../api/queries/searchUsers.types";
import Icon from "@react-native-vector-icons/ionicons";
import { theme } from "../../../../../utils/theme/theme";
import Button from "../../../../designSystem/Button/Button";

export default ({ user }: MainContentCardProps) => {

  const { searchResult, setSearchResult, isEditable } = useContext(MainScreenContext)

  const onCheck = useCallback(() => {
    if (searchResult) {
      const updatedSearchResultItems = searchResult?.items.map((item) => {
        if (item.node_id === user.node_id) {
          return { ...item, checked: !item.checked }
        } else {
          return item
        }
      })
      const updatedSearchResult: SearchUserResponse = {
        ...searchResult,
        items: updatedSearchResultItems
      }

      setSearchResult(updatedSearchResult)
    }
  }, [searchResult, user.checked])

  return (
    <View testID="userCard" style={style.box}>
      <CheckBox
        value={user.checked}
        onValueChange={onCheck}
        icon={<Icon name="checkmark" size={18} color="#fff" />}
        style={[style.checkbox, !isEditable && { display: 'none' }]}
        disabled={!isEditable}
        testID="userCardCheckbox"
      />
      <View style={style.content}>

        <View style={style.infos}>
          <Image style={style.avatar} source={{ uri: user.avatar_url }} />
          <Text style={[style.text, { color: theme.colors.secondaryText }]}>#{user.id}</Text>
          <Text style={style.text}>{user.login}</Text>
        </View>

        <Button onPress={() => Linking.openURL(user.html_url)}>
          View Profile
        </Button>
      </View>
    </View>
  )
}

const AVATAR_SIZE = 64

const style = StyleSheet.create({
  box: {
    position: 'relative',
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: theme.spacing.xl
  },
  infos: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginBottom: theme.spacing.s
  },
  text: {
    fontSize: 16,
    marginBottom: theme.spacing.s
  },
  checkbox: {
    position: 'absolute',
    top: 0,
    left: 0
  }
})