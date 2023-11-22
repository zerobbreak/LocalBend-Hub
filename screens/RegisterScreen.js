import { View, Text, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    }

    axios.post("http://192.168.1.148:8080/register", user).then((response) => {
      console.log(response.data);
      Alert.alert("Registration Successful", "you have been registered successfully");
      setName("")
      setEmail("")
      setPassword("")
    }).catch((error) => {
      Alert.alert("Registration failed", "An error occured during registration");
      console.log("error", error);
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 50 }}>
        <Image
          source={require("../imgs/SignUp.jpg")}
          style={{ width: 300, height: 200, resizeMode: 'contain', borderRadius: 6 }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 25 }}>Register to our community</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderColor: '#000', borderWidth: 1, paddingVertical: 5, borderRadius: 5 }}>
            <Octicons style={{ marginLeft: 8 }} name='person' size={24} color="grey" />
            <TextInput value={name} onChangeText={(text) => setName(text)} placeholderTextColor={"grey"} style={{ color: 'gray', marginVertical: 10, width: 270, fontSize: name ? 16 : 16 }} placeholder='enter your name' />
          </View>
        </View>

        <View style={{ marginTop: 30, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderColor: "#000", borderWidth: 1, paddingVertical: 5, borderRadius: 5 }}>
            <MaterialCommunityIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
            <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholderTextColor={"grey"} style={{ color: 'gray', marginVertical: 10, width: 270, fontSize: email ? 16 : 16 }} placeholder='enter your email' />
          </View>

          <View style={{ marginTop: 30, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, borderColor: "#000", borderWidth: 1, paddingVertical: 5, borderRadius: 5 }}>
              <AntDesign style={{ marginLeft: 8 }} name="lock" size={24} color="black" />
              <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} placeholderTextColor={"grey"} style={{ color: 'gray', marginVertical: 10, width: 270, fontSize: password ? 16 : 16 }} placeholder='enter your password' />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 12 }} />
        <Pressable onPress={handleRegister} style={{ width: 200, backgroundColor: 'black', padding: 15, marginTop: 40, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 12 }} >
          <Text style={{ textAlign: 'center', fontSize: 14 }}>Already have an account? Sign in</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen