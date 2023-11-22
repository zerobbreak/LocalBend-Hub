import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const SearchScreen = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const searchFilters = [
    {
      type: 'Category',
      options: ['Plumbing', 'Electrician', 'Tutoring', 'Events', 'Food', 'Health', 'Fitness', 'Other'],
    },
    {
      type: 'Location',
      options: ['Near Me', 'City Center', 'Suburbs', 'Specific Address'],
    },
    {
      type: 'Rating',
      options: ['5 stars', '4 stars & above', '3 stars & above', '2 stars & above', '1 star & above'],
    },
    {
      type: 'Sort By',
      options: ['Relevance', 'Rating', 'Distance', 'Popularity'],
    },
  ];

  const handleFilterChange = (type, value) => {
    setSelectedFilters({ ...selectedFilters, [type]: value });
    // Implement logic to apply filters in your app based on the selected values
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', gap: 20, borderColor: '#d0d0d0', borderWidth: 1, padding: 15, marginHorizontal: 20, borderRadius: 10 }}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput style={{ flex: 1 }} placeholder='Search events and businesses' />
        </View>
        <View style={{ marginTop: 10, padding: 20 }}>
          {searchFilters.map((filter) => (
            <View key={filter.type} style={{ marginVertical: 10, marginRight: 10 }}>
              <Text>{filter.type}</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', maxWidth: 300 }}>
                {filter.options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => handleFilterChange(filter.type, option)}
                    style={{
                      padding: 10,
                      backgroundColor: selectedFilters[filter.type] === option ? 'black' : '#e0e0e0',
                      borderRadius: 5,
                      marginVertical: 5,
                      marginRight: 5,
                    }}
                  >
                    <Text style={{ color: selectedFilters[filter.type] === option ? 'white' : 'black' }}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        <Pressable style={{marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#000', width: 110, paddingVertical: 13, borderRadius: 4}}>
          <Text style={{color: 'white', textAlign: 'center'}}>Show Results</Text>
        </Pressable>
        <View style={{marginBottom: 50}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
