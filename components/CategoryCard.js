import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const CategoryCard = ({ title, icon }) => {
    return (
        <View>
            <View style={{backgroundColor: "#9d9d9", width: 90, height: 90}}>
                <FontAwesome5 name="drum" size={24} color="black" />            
            </View>
            <Text>{title}</Text>
        </View>
    )
}

export default CategoryCard;