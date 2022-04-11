import {  Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Onboarding } from './components';
import TabNavigator from './navigation/TabNavigator';
import { COLORS } from './constants';

import Home from './screens/Home';
import {
  useFonts,
  Roboto_900Black,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_300Light,
} from '@expo-google-fonts/roboto';

const Stack = createStackNavigator();
const Loading = () => {
  return (
    <View>
      <Text>Hello</Text>
      <ActivityIndicator size="large" />
    </View>
  )
};
const App = () => {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("error @viewedOnboarding: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, [viewedOnboarding]);

  // return (
  //   <View style={styles.container}>
  //     {loading ? <Loading /> : viewedOnboarding ? <Home /> : <Onboarding />}
  //     {/* <Onboarding/> */}

  //     <StatusBar style="auto" />
  //   </View>
  // );

  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_300Light,
  });
  if (!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  } else {
    return (
      <NavigationContainer>
        {/* <Onboarding /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          {loading ? <Stack.Screen name="Loading" component={Loading} /> : viewedOnboarding ? <Stack.Screen name="TabNavigator" component={TabNavigator} /> : <Stack.Screen name="Onboarding" component={Onboarding} />}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;
