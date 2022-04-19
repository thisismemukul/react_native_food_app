import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, SIZES, allRestaurants, popularBrands, zomatoData, popularDishes } from "../../constants";
import { RectButton } from '../Buttons';
// import IncDec from '../IncDec';
import { useNavigation } from '@react-navigation/native'
import { addtoCart, showCart } from '../../helper/Carthelper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DetailsRender = ({ item }) => {
    const navigation = useNavigation();
    const [text, setText] = useState(item.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);
    const [addtoCartButton, setAddtoCartButton] = useState(false);
    // console.log("addtoCartButton", addtoCartButton);
    const [cart, setCart] = useState('');
    const handlePress = () => {
        addtoCart(item);
        setCart(item);
    };
    const handlePressViewCart = () => {
        showCart().then(res => {
            // setProducts(res)
            // console.log("res-----------------------------------------------------------------");
            // console.log("res", res);
            // console.log("res-----------------------------------------------------------------");
            navigation.navigate("Cart", { item: res })
        });
    };
    return (
        <View style={{ zIndex: 0, padding: SIZES.extraLarge, }}>
            <View style={{ padding: SIZES.small, }}>
                <Image source={item.image} resizeMode="cover" style={{ width: "100%", height: 360 }} />
                <View style={{ width: "30%", padding: SIZES.small, }}>
                    <RectButton item={item} minWidth={30} bgColor={COLORS.secondary} iconColor={COLORS.primary} textColor={COLORS.dark} />
                </View>
            </View>

            <View style={{
                padding: SIZES.small, flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <View style={{ marginVertical: SIZES.font }}>
                    <View style={{ padding: SIZES.small }}>
                        <Text
                            style={{
                                color: COLORS.dark,
                                fontFamily: FONTS.bold,
                                fontSize: SIZES.extraLarge,
                            }}
                        >
                            {item.title}
                        </Text>
                    </View>
                </View>
                <RectButton item={item} minWidth={30} bgColor={COLORS.secondary} iconColor={COLORS.primary} textColor={COLORS.dark} />
                {/* <IncDec /> */}
            </View>
            <View style={{ padding: SIZES.small, }}>
                <View style={{ padding: SIZES.small }}>
                    <Text
                        style={{
                            color: COLORS.dark,
                            fontFamily: FONTS.small,
                            fontSize: SIZES.large,
                        }}
                    >
                        Description
                    </Text>
                    <View
                        style={{
                            marginTop: SIZES.base,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.dark,
                                fontSize: SIZES.small,
                                fontFamily: FONTS.regular,
                                lineHeight: SIZES.large,
                            }}
                        >
                            {text}
                            {!readMore && "..."}
                            <Text
                                style={{
                                    color: COLORS.primary,
                                    fontSize: SIZES.small,
                                    fontFamily: FONTS.semiBold,
                                }}
                                onPress={() => {
                                    if (!readMore) {
                                        setText(item.description);
                                        setReadMore(true);
                                    } else {
                                        setText(item.description.slice(0, 100));
                                        setReadMore(false);
                                    }
                                }}
                            >
                                {readMore ? " Show Less" : " Read More"}
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    width: "100%",
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    // backgroundColor: COLORS.dark,
                    zIndex: 1,
                }}
            >
                <View style={{
                    padding: SIZES.small, flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>

                    <View style={{ padding: SIZES.small }}>
                        <Text
                            style={{
                                color: COLORS.dark,
                                fontFamily: FONTS.bold,
                                fontSize: SIZES.extraLarge,
                            }}
                        >
                            ₹ {item.price}
                        </Text>
                    </View>
                    {cart ? <RectButton handlePress={handlePressViewCart} item={item} minWidth={328} bgColor={COLORS.secondary} textColor={COLORS.dark} text="View Cart" /> : <RectButton handlePress={handlePress} item={item} minWidth={328} bgColor={COLORS.primary} textColor={COLORS.white} text="Add To Cart" />}
                </View>
            </View>
        </View>
    )
}

export default DetailsRender;