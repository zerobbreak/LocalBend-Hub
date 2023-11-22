import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import SearchScreen from "./screens/SearchScreen";
import OverviewScreen from "./screens/OverviewScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Results from "./screens/Results";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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

      <Tab.Screen name="Discover" component={DiscoveryScreen} options={{
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
          headerShown: false, tabBarLabel: "Home", tabBarLabelStyle: { color: '#000' }, tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color="black" />
            ) : (
              <Ionicons name="search-outline" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen name="Overview" component={OverviewScreen}
        options={{
          headerShown: false, tabBarLabel: "Home", tabBarLabelStyle: { color: '#000' }, tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          headerShown: false, tabBarLabel: "Home", tabBarLabelStyle: { color: '#000' }, tabBarIcon: ({ focused }) =>
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
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabBar} options={{ headerShown: false }} />
        <Stack.Screen name="Search Results" component={Results} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
