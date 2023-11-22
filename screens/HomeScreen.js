import { View, Text, Image, TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, Feather } from '@expo/vector-icons';
import Card from '../components/Card';
import CategoryCard from "../components/CategoryCard";
const HomeScreen = () => {
  const items = [
    {
      title: 'Home',
      icon: 'home',
    },
    {
      title: 'Events',
      icon: 'calendar-alt',
    },
    {
      title: 'Services',
      icon: 'toolbox',
    },
    {
      title: 'Profile',
      icon: 'user',
    },
    // Add more items as needed
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>Find local services adn events near</Text>
          <Image source={require("../imgs/Profile.jpg")} style={{ width: 45, height: 45, resizeMode: 'contain', borderRadius: 50, }} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderColor: "#D0D0D0", borderWidth: 1, padding: 15, marginHorizontal: 20, borderRadius: 6 }}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput placeholder='Search for services and events' />
        </View>
        <View style={{ marginTop: 20, padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Featured services and events</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <Card title="Concert" eventType="Discover the latest" Date="May 23 2023" img={require("../imgs/Community.jpg")} />
            <Card title="Exhibition" eventType="Explore" Date="May 23 2023" img={require("../imgs/SignUp.jpg")} />
          </View>
        </View>
        <View style={{ marginTop: -4, padding: 20 }}>
          <Text>Categories</Text>
          <View>
            {items.map((item, index) => {
              <CategoryCard title={item.title} icon={item.icon_name} key={index}/>
            })}
          </View>
        </View>
        <View style={{ marginTop: 20, padding: 20, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text>Events</Text>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <Card title="Festival" eventType="Summer Festival" img={require("../imgs/Concert2.jpg")} heart />
            <Card title="Festival" eventType="Summer Festival" img={require("../imgs/Concert.jpg")} heart />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen