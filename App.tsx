import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import MainScreen from "./src/components/screens/MainScreen/MainScreen"

export default () => {

  return (
    <SafeAreaView style={[style.safeArea, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      {Platform.OS === 'android' && (
          <StatusBar 
            barStyle="dark-content"
          />
      )}
      <View style={style.container}>
        <MainScreen />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#929292'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})