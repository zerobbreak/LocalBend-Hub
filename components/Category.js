import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const Category = ({data}) => {
  return (
    <FlatList 
        data={data}
        renderItem={({item}) => CategoryCard(item.title, item.icon_name)}
        keyExtractor={(item) => item.id}
    />
  )
}

const CategoryCard = ({title, icon}) => {
    return (
        <View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#d9d9d9'}}>
                <FontAwesome5 name={icon} size={24} color="black" />
            </View>

            <Text>{title}</Text>
        </View>
    )
}

export default Category