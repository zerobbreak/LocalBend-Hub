import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Card = ({ title, eventType, img, Date, heart }) => {

  return (
    <ImageBackground borderRadius={5} source={img} style={{ width: 150, height: 160, padding: 5, marginTop: 10 }}>

      {heart ? (
        <View style={{ flexDirection: 'row', gap: 2 }}>
          <View style={{ backgroundColor: '#000', width: 90, height: 30, padding: 4, }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>{title}</Text>
          </View>
          <View>
            <AntDesign name={heart} size={24} color="black" />
          </View>
        </View>
      ) : (
        <View style={{ backgroundColor: '#000', width: 90, height: 30, padding: 4, borderRadius: 4 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>{title}</Text>
        </View>
      )
      }

      <View style={{ position: 'absolute', top: 100, bottom: 0, padding: 5, }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>{eventType}</Text>
        <Text style={{ color: '#fff', fontSize: 12 }}>{Date ? Date : ""}</Text>
      </View>
    </ImageBackground >
  )
}

export default Card