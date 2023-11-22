import { View, Text, TextInput, Pressable, Image, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          setTimeout(() => {
            navigation.replace("Main");
          }, 400);
        }
      } catch (error) {
        console.log("Error", error);
      }
    }

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    }

    axios.post("http://192.168.1.148:8080/login", user).then((response) => {
      console.log(response);
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token);
      navigation.navigate("Home")
    }).catch((error) => {
      Alert.alert("Login erorr")
      console.log("Error", error);
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: 'center' }}>
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 280, height: 180, resizeMode: 'contain', borderRadius: 5 }}
          source={require("../imgs/Community.jpg")}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 20 }}>Login</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 10 }}>Welcome to your community</Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderColor: "#000", borderWidth: 1, paddingVertical: 5, borderRadius: 5 }}>
            <MaterialCommunityIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
            <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholderTextColor={"grey"} style={{ color: 'gray', marginVertical: 10, width: 270, fontSize: email ? 16 : 16 }} placeholder='enter your email' />
          </View>

          <View style={{ marginTop: 30, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderColor: "#000", borderWidth: 1, paddingVertical: 5, borderRadius: 5 }}>
              <AntDesign style={{ marginLeft: 8 }} name="lock" size={24} color="black" />
              <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholderTextColor={"grey"} style={{ color: 'gray', marginVertical: 10, width: 270, fontSize: password ? 16 : 16 }} placeholder='enter your password' />
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
            <Text>Keep me logged in</Text>
            <Text style={{ fontWeight: 500, color: '#007FFF' }}>Forget Password</Text>
          </View>
        </View>

        <View style={{ marginTop: 45 }} />
        <Pressable onPress={handleLogin} style={{ width: 200, backgroundColor: "black", padding: 15, marginTop: 40, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Sign Up")} style={{ marginTop: 12 }}>
          <Text style={{ textAlign: 'center', fontSize: 14 }}>Don't have an account? Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen