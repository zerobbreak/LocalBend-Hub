import { View, Text, TextInput, Pressable, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen