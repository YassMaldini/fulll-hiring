import { StyleSheet, Text, View } from "react-native"

export default () => {
  return (
    <View style={style.header}>
      <Text style={style.text}>Github Search</Text>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#929292',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
})