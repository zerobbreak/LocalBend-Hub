// insertDummyData.js
const mongoose = require('mongoose');
const Event = require('./model/event');

const insertDummyData = async () => {
    try {
        // Define your dummy data
        const eventsData = [
            {
                title: "Music Festival",
                description: "A lively music festival with various genres.",
                date: new Date("2023-08-15T18:00:00Z"),
                location: "City Park",
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Remote image URL
            },
            {
                title: "Tech Conference",
                description: "Explore the latest in technology and innovation.",
                date: new Date("2023-09-20T09:00:00Z"),
                location: "Tech Center",
                image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Remote image URL
            },
            {
                title: "Food Expo",
                description: "Discover delicious cuisines from around the world.",
                date: new Date("2023-10-10T12:00:00Z"),
                location: "Exhibition Hall",
                image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Remote image URL
            },
            {
                title: "Art Exhibition",
                description: "An exhibition showcasing diverse artworks.",
                date: new Date("2023-11-05T14:00:00Z"),
                location: "Art Gallery",
                image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Remote image URL
            },
            {
                title: "Fitness Class",
                description: "Join a high-energy fitness class for all levels.",
                date: new Date("2023-12-01T17:30:00Z"),
                location: "Fitness Studio",
                image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Remote image URL
            },
        ];

        await Event.deleteMany(); // Clear existing data
        // Insert dummy events into the database
        const insertEvents = await Event.insertMany(eventsData);

        console.log('Dummy data inserted successfully.', `Length: ${insertEvents.length}`);
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    } finally {
        // Close the MongoDB connection after inserting data
        mongoose.connection.close();
    }
};

module.exports = insertDummyData;
