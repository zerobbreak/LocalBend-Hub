import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../imgs/Background.jpg")}
        style={{ height: 200, width: '100%', }}
      />

      <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 170, left: 50, right: 50, bottom: 40 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <Image
            source={require("../imgs/Profile.jpg")}
            style={{ height: 120, width: 120, borderRadius: 100, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>John Doe</Text>
        <Text style={{ textAlign: 'center', fontWeight: '300' }}>Connecting with the community</Text>
      </View>

      <View style={{ marginTop: 120 }}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity style={{borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10}}>
            <Text>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10}}>
            <Text>Events</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Text>Business</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen