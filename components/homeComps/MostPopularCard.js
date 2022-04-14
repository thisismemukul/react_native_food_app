import { View, Image, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../../constants';
import { useNavigation } from '@react-navigation/native'
import SvgUri from 'react-native-svg-uri';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LikeButton } from '../Buttons';
import React from 'react'

const MostPopularCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} >

                <View style={{ justifyContent: "center", backgroundColor: COLORS.white, width: 190, height: 265, margin: SIZES.base, borderRadius: 10, overflow: "hidden", }}>
                    <View style={{ width: 45, height: 45, alignSelf: "flex-end", marginEnd: SIZES.font }}>
                        <LikeButton />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        {item.imgType === "SVG" ? <SvgUri
                            width="135"
                            height="105"
                            source={item.image}
                        /> : <Image source={item.image} style={{ width: 155, height: 135 }} />}
                    </View>
                    <View style={{ padding: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: FONTS.regular, }}>{item.title}</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            <Ionicons name={assets.starIcon} size={SIZES.small} color={COLORS.primary} /> {item.rate} | {item.distance} km
                        </Text>
                        <Text>₹ {item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MostPopularCard