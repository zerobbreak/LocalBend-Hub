import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EventScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://192.168.1.148:8080/events");
        const data = await response.json();
        console.log(data)

        // Check if data is an array before setting the state
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.log("Data is not an array:", data);
        }
      } catch (error) {
        console.log("Error fetching events", error);
      }
    };

    fetchEvents();
  }, []);


  const handleEventPress = (eventId) => {
    // Placeholder function, replace with actual implementation
    console.log(`Event pressed with ID: ${eventId}`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {events
            .map((event) => (
              <TouchableOpacity
                key={event._id}
                style={styles.eventCard}
                onPress={() => handleEventPress(event._id)}
              >
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <View style={styles.eventDetails}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventDate}>{event.date}</Text>
                  <Text style={styles.eventLocation}>{event.location}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>

        <View>
          <Text style={styles.sectionTitle}>Local Business</Text>
          {events
            .filter((event) => event.category === 'Local Business') // Assuming you have a 'category' field in your database
            .map((event) => (
              <TouchableOpacity
                key={event._id}
                style={styles.eventCard}
                onPress={() => handleEventPress(event._id)}
              >
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <View style={styles.eventDetails}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventDate}>{event.date}</Text>
                  <Text style={styles.eventLocation}>{event.location}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  eventCard: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  eventImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  eventDetails: {
    flex: 1,
    padding: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: '#555',
  },
});

export default EventScreen;
