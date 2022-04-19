import { View, Text, TextInput, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES, assets, trendingSearches, popularDishes } from "../../constants";
import { RectButton } from '../Buttons';
import PopularCard from '../homeComps/PopularCard';
const SearchHeader = ({ onSearch }) => {
    return (
        <View>
            <View style={{ zIndex: 0, margin: SIZES.extraLarge, padding: SIZES.extraLarge }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <TextInput
                        placeholder="Search for restaurants and food"
                        style={{ flex: 1, borderColor: COLORS.dark, borderWidth: 1, borderRadius: SIZES.large, padding: SIZES.small }}
                        onChangeText={onSearch}
                    />
                </View>

            </View>
            <View
                style={{
                    borderBottomColor: COLORS.dark,
                    borderBottomWidth: 1,
                }}
            />
            <View
                style={{
                    padding: SIZES.extraLarge,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <Text
                    style={{
                        padding: SIZES.font,
                        color: COLORS.dark,
                        fontFamily: FONTS.medium,
                        fontSize: SIZES.extraLarge,
                    }}
                >
                    Trending Searches
                </Text>
                <FlatList
                    data={trendingSearches}
                    renderItem={({ item }) => <RectButton item={item} minWidth={150} bgColor={COLORS.secondary} borderColor={COLORS.dark} iconColor={COLORS.dark} textColor={COLORS.dark} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    keyExtractor={(item) => item.id}
                    scrollEventThrottle={32}
                />
                <Text
                    style={{
                        padding: SIZES.font,
                        color: COLORS.dark,
                        fontFamily: FONTS.medium,
                        fontSize: SIZES.extraLarge,
                    }}
                >
                    Popular Dishes
                </Text>
                <View style={{ height: 200 }}>
                    <FlatList
                        data={popularDishes}
                        renderItem={({ item }) => <PopularCard item={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={true}
                        keyExtractor={(item) => item.id}
                        scrollEventThrottle={32}
                    />
                </View>
            </View>
        </View>
    )
}

export default SearchHeader