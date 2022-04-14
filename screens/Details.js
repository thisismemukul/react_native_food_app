import { View, SafeAreaView, Text, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import { RectButton } from '../components';

import { COLORS, SIZES, FONTS, assets, zomatoData } from '../constants';
import {
    DetailsHeader,
    FocusedStatusBar,
    DetailsRender,
    LikeButton
} from '../components';
const Details = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />

            <View style={{ zIndex: 0 }}>
                {/* <FlatList
                    data={zomatoData}
                    renderItem={({ data }) => <DetailsRender data={data} />}
                    keyExtractor={(data) => data.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<DetailsHeader />}
                /> */}
                <DetailsHeader />
                <View style={{ width: 45, height: 45, alignSelf: "flex-end", marginEnd: SIZES.font }}>
                    <LikeButton />
                </View>
                <ScrollView>
                    <DetailsRender item={item} />
                </ScrollView>
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

export default Details;