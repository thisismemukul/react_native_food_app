import { Platform, StyleSheet, View, SafeAreaView, Text, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import { RectButton } from '../components';

import { COLORS, SIZES, FONTS, assets, zomatoData } from '../constants';
import {
  DetailsHeader,
  FocusedStatusBar,
  ProfileRender,
  LikeButton
} from '../components';
const Login = ({ navigation, route }) => {
  // const { names } = route.params.names;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{ zIndex: 0 }}>

        {/* <ScrollView style={{ height: 400, marginBottom: 100 }}>
          <SearchRender />
        </ScrollView> */}
        <FlatList
          data={zomatoData}
          renderItem={({ item }) => <ProfileRender item={item} />}
          keyExtractor={(item) => item.id + Math.random()}
          // keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<DetailsHeader title="My Profile" />}
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
        <View style={{ height: 115 }} >
          <Image source={assets.detailsHeaderImg} resizeMode="cover" style={{
            width: '100%',
            height: '100%',
          }} />
        </View>
        <View style={{
          flex: 1, backgroundColor: COLORS.white, borderTopLeftRadius: SIZES.extremeLarge,
          borderTopRightRadius: SIZES.extremeLarge,
        }} />
      </View>
    </SafeAreaView >
  )
}

export default Login;