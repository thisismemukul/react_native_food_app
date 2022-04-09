import { View, Button, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
      console.log("Error @clearOnboarding", error);
    }
  }
  return (
    <View>
      <Text onPress={clearOnboarding}>tytgyt</Text>
      <Text>Home</Text>

    </View>
  )
}

export default Home