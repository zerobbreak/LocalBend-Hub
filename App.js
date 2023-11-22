import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import SearchScreen from "./screens/SearchScreen";
import OverviewScreen from "./screens/OverviewScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Results from "./screens/Results";

const BottomTabBar = () =>{
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Discover" component={DiscoveryScreen}/>
      <Tab.Screen name="Search" component={SearchScreen}/>
      <Tab.Screen name="Overview" component={OverviewScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Sign Up" component={RegisterScreen}/>
        <Stack.Screen name="Main" component={BottomTabBar}/>
        <Stack.Screen name="Search Results" component={Results}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
