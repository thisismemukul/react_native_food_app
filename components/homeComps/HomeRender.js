import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, allRestaurants, popularBrands, zomatoData, popularDishes } from "../../constants";
// import { PopularCard, MostPopularCard, Restaurants } from '../components';
import PopularCard from './PopularCard';
import MostPopularCard from './MostPopularCard';
import Restaurants from './Restaurants';

import Ionicons from 'react-native-vector-icons/Ionicons';

const numColumns = 2;
const numColumnsRestaurants = 2;
const HomeRender = ({ item }) => {
    return (
        <View style={{ zIndex: 0, padding: SIZES.extraLarge }}>
            <View style={{ padding: SIZES.small }}>
                <Text
                    style={{
                        fontFamily: FONTS.medium,
                        fontSize: SIZES.extraLarge,
                    }}
                >
                    {item.title}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.font,
                        }}
                    >
                        {item.subTitle}
                    </Text>
                    <View style={{ padding: SIZES.small }}>
                        <Ionicons name={item.image} size={SIZES.large} color={COLORS.primary} />
                    </View>
                </View>
            </View>
            <View>
                {item.title == "Popular Brands" ? <FlatList
                    data={popularBrands}
                    renderItem={({ item }) => <PopularCard item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    keyExtractor={(item) => item.id}
                // scrollEventThrottle={32}
                /> : null}
                {item.title == "Most Popular" ? <FlatList
                    data={zomatoData}
                    renderItem={({ item }) => <MostPopularCard item={item} />}
                    // vertical
                    numColumns={numColumns}
                    bounces={true}
                    keyExtractor={(item) => item.id}
                // scrollEventThrottle={32}
                /> : null}
                {item.title == "Popular Dishes" ? <FlatList
                    data={popularDishes}
                    renderItem={({ item }) => <PopularCard item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    keyExtractor={(item) => item.id}
                // scrollEventThrottle={32}
                /> : null}
                {item.title == "All Nearby Restaurants" ? <FlatList
                    data={allRestaurants}
                    renderItem={({ item }) => <Restaurants item={item} />}
                    bounces={true}
                    keyExtractor={(item) => item.id}
                // scrollEventThrottle={32}
                /> : null}
            </View>
        </View>
    )
}

export default HomeRender