import { View, SafeAreaView, FlatList, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { RectButton } from '../components';

import { COLORS, SIZES, FONTS, assets, allRestaurants, zomatoData, popularDishes } from '../constants';
import {
  SearchHeader,
  FocusedStatusBar,
  SearchRender,
  LikeButton
} from '../components';
const Search = () => {
  var jsonArray1 = zomatoData;
  var jsonRestaurants = allRestaurants;
  var jsonDishes = popularDishes;
  var finalData;
  jsonArray1 = jsonArray1.concat(jsonRestaurants);
  finalData = jsonArray1.concat(jsonDishes);

  const [nftData, setNftData] = useState(allRestaurants);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(finalData);
    }

    const filteredData = finalData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(finalData);
    } else {
      setNftData(filteredData);
    }
  };
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
          data={nftData}
          renderItem={({ item }) => <SearchRender item={item} />}
          keyExtractor={(item) => item.id + Math.random()}
          // keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<SearchHeader title="Search" onSearch={handleSearch} />}
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

        <View style={{
          flex: 1, backgroundColor: COLORS.white, borderTopLeftRadius: SIZES.extremeLarge,
          borderTopRightRadius: SIZES.extremeLarge,
        }} />
      </View>
    </SafeAreaView >
  )
}

export default Search;