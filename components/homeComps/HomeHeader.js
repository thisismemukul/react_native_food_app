import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES, assets, categoryItems, slides } from "../../constants";
import { RectButton } from '../Buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={{ zIndex: 0, padding: SIZES.extraLarge }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Ionicons name={assets.menuIcon} size={SIZES.extraLarge} color={COLORS.dark} />
                <View style={{ width: 45, height: 45 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            borderRadius: SIZES.extraLarge,
                        }}
                        onPress={() =>
                            navigation.navigate("Profile", { names: ['Mukul', 'Saini'] })
                        }
                    >
                        <Image
                            source={assets.curUser}
                            resizeMode="contain"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginVertical: SIZES.font }}>
                <View style={{ padding: SIZES.small }}>
                    <Text
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.extremeLarge,
                        }}
                    >
                        Eat What Makes
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
                                fontSize: SIZES.extraLarge,
                                paddingEnd: SIZES.base,
                            }}
                        >
                            You
                        </Text>
                        <Text
                            style={{
                                fontFamily: FONTS.bold,
                                fontSize: SIZES.extraLarge,
                            }}
                        >
                            Happy
                        </Text>
                        <View style={{ padding: SIZES.small }}>
                            <Ionicons name={assets.fastFoodIcon} size={SIZES.extremeLarge} color={COLORS.primary} />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    data={categoryItems}
                    renderItem={({ item }) => <RectButton item={item} minWidth={150} bgColor={COLORS.primary} iconColor={COLORS.white} textColor={COLORS.white} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    keyExtractor={(item) => item.id}
                    scrollEventThrottle={32}
                />
            </View>
        </View>
    )
}

export default HomeHeader;