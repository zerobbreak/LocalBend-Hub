import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Find local services adn events near</Text>
        <Image source={require("../imgs/Profile.jpg")} style={{width: 70, height: 70, resizeMode: 'contain', borderRadius: 50,}}/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen