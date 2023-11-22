import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Image
          source={require("../imgs/Background.jpg")}
          style={{ height: 200, width: '100%' }}
        />

        <View style={{ alignItems: 'center', marginTop: -60 }}>
          <Image
            source={require("../imgs/Profile.jpg")}
            style={{ height: 120, width: 120, borderRadius: 60, resizeMode: 'cover', marginBottom: 20 }}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>John Doe</Text>
          <Text style={{ textAlign: 'center', fontWeight: '300' }}>Connecting with the community</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <TouchableOpacity style={{ borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10 }}>
              <Text>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10 }}>
              <Text>Events</Text>
            </TouchableOpacity>
          </View>


          <View style={{ backgroundColor: '#d9d9d9', padding: 20, margin: 10, height: 'auto', borderRadius: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>Business</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <ImageBackground borderRadius={20} source={require("../imgs/Business.jpg")} style={{ height: 150, width: 150, padding: 10, }}>
                <Text style={{ color: '#fff', position: 'absolute', top: 110, left: 10 }}>Traditional Material</Text>
              </ImageBackground>
              <ImageBackground borderRadius={20} source={require("../imgs/Business2.jpg")} style={{ height: 150, width: 150, padding: 10, }}>
                <Text style={{ color: '#fff', position: 'absolute', top: 110, left: 10 }}>Traditional Wedding</Text>
              </ImageBackground>
            </View>
          </View>
          
          <View style={{ backgroundColor: '#d9d9d9', padding: 20, margin: 10, height: 'auto', borderRadius: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>Concerts</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <ImageBackground borderRadius={20} source={require("../imgs/Concert.jpg")} style={{ height: 150, width: 150, padding: 10, }}>
                <Text style={{ color: '#fff', position: 'absolute', top: 110, left: 10 }}>Summer Event</Text>
              </ImageBackground>
              <ImageBackground borderRadius={20} source={require("../imgs/Concert2.jpg")} style={{ height: 150, width: 150, padding: 10, }}>
                <Text style={{ color: '#fff', position: 'absolute', top: 110, left: 10 }}>Hyped Culture</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
