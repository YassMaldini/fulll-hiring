import { Text, View } from "react-native"
import { EmptyProps } from "./Empty.types"
import { theme } from "../../../utils/theme/theme"

export default ({ text }: EmptyProps) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, color: theme.colors.secondaryText }}>{text}</Text>
    </View>
  )
}