import { View, Text, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5, Feather } from '@expo/vector-icons';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>Find local services adn events near</Text>
        <Image source={require("../imgs/Profile.jpg")} style={{ width: 70, height: 70, resizeMode: 'contain', borderRadius: 50, }} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderColor: "#D0D0D0", borderWidth: 1, padding: 15, marginHorizontal: 20, borderRadius: 6 }}>
        <FontAwesome5 name="calendar-day" size={24} color="black" />
        <TextInput placeholder='Search for services and events' />
      </View>

      <View style={{ marginTop: 20, padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Featured services and events</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <Card title="Concert" eventType="Discover the latest" Date="May 23 2023" img={require("../imgs/Community.jpg")}/>
          <Card title="Concert" eventType="Discover the latest" Date="May 23 2023" img={require("../imgs/SignUp.jpg")}/>
        </View>
      </View>

      <View style={{ marginTop: -4, padding: 20 }}>
        <Text>Categories</Text>
      </View>

      <View style={{marginTop: 20, padding: 20,}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
          <Text>Events</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </View>

        <Card title="Festival"/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen