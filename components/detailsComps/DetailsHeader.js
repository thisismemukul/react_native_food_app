import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES, assets, categoryItems, slides } from "../../constants";
import { RectButton } from '../Buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DetailsHeader = () => {
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
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()
                    }
                >

                    <Ionicons name={assets.backIcon} size={SIZES.extraLarge} color={COLORS.dark} />
                </TouchableOpacity>
                <View style={{ marginVertical: SIZES.font }}>
                    <View style={{ padding: SIZES.small }}>
                        <Text
                            style={{
                                color:COLORS.dark,
                                fontFamily: FONTS.medium,
                                fontSize: SIZES.large,
                            }}
                        >
                            Details
                        </Text>
                    </View>
                </View>
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

        </View>
    )
}

export default DetailsHeader