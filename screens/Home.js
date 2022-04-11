import { View, SafeAreaView, Text, FlatList } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, homeRender, allRestaurants } from '../constants';
import {
  HomeHeader,
  FocusedStatusBar,
  HomeRender,
} from '../components';

const Home = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
      console.log("Error @clearOnboarding", error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        {/*  <Text onPress={clearOnboarding}></Text> */}

        <View style={{ zIndex: 0 }}>
          <FlatList
            data={homeRender}
            renderItem={({ item }) => <HomeRender item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundColor: COLORS.background
        }}>
          {/* <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.dark }} /> */}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home