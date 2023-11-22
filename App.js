import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
import EventScreen from "./screens/Event";
import ProfileScreen from "./screens/ProfileScreen";
// import RegisterScreen from "./screens/RegisterScreen";
import Results from "./screens/Results";
import SearchScreen from "./screens/SearchScreen";

const BottomTabBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarLabel: "Home", tabBarLabelStyle: { color: '#000' }, tabBarIcon: ({ focused }) =>
          focused ? (
            <Entypo name="home" size={24} color="black" />
          ) : (
            <AntDesign name="home" size={24} color="black" />
          ),
      }}
      />

      <Tab.Screen name="Search" component={SearchScreen}
        options={{
          headerShown: false, tabBarLabel: "Search", tabBarLabelStyle: { color: '#000' }, tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color="black" />
            ) : (
              <Ionicons name="search-outline" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen name="Event" component={EventScreen}
        options={{
          headerShown: false, tabBarLabel: "Event", tabBarLabelStyle: { color: '#000' }, tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="calendar-day" size={24} color="black" />
            ) : (
              <FontAwesome5 name="calendar" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          headerShown: false, tabBarLabel: "Profile", tabBarLabelStyle: { color: '#000' }, tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={RegisterScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Main" component={BottomTabBar} options={{ headerShown: false }} />
        <Stack.Screen name="Search Results" component={Results} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
