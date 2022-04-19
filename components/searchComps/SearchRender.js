import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LikeButton } from '../Buttons';
import { useNavigation } from '@react-navigation/native'

const SearchRender = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} >

            <View style={{ flex: 1, justifyContent: "center", backgroundColor: COLORS.white, width: "100%", height: 174, margin: SIZES.base, borderRadius: 10, overflow: "hidden", }}>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundColor: COLORS.white,
                    margin: SIZES.base, borderRadius: 10, overflow: "hidden"
                }}>

                    <View style={{ margin: SIZES.base, }}>
                        <Image source={item.image} style={{ width: 155, height: 135 }} />
                    </View>
                    <View style={{ flex: 1, margin: SIZES.base, padding: 10, width: 155, alignItems: "flex-start", }}>
                        <Text style={{ color: COLORS.dark, fontFamily: FONTS.medium, }}>{item.title}</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            <Ionicons name={assets.starIcon} size={SIZES.small} color={COLORS.primary} /> {item.rate} | {item.distance} km
                        </Text>
                        <Text style={{ color: COLORS.dark, }}>{item.restaurant}</Text>
                        {item.price ? <Text
                            style={{ color: COLORS.dark, }}
                        >
                            ₹ {item.price}
                        </Text> : null}
                    </View>
                    <View style={{ width: 45, height: 45, alignSelf: "flex-start", marginEnd: SIZES.font, }}>
                        <LikeButton />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchRender