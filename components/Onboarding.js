import React, { useState, useRef } from 'react'
import { StyleSheet, View, Text, FlatList, Animated } from 'react-native'
import { slides } from '../constants';
import OnboardingItem from './OnboardingItem';
import { NextButton } from '../components/Buttons';
import Paginator from './Paginator';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState()
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({
                index: currentIndex + 1
            })
        } else {
            try {
                await AsyncStorage.setItem('@viewedOnboarding', 'true')
                console.log("here")
            } catch (error) {
                console.log("error @scrollTo: ", error)
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={slides} scrollX={scrollX} />
            {/* <NextButton percentage={(currentIndex + 1) * (100 / slides.length)} /> */}
            <NextButton
                scrollTo={scrollTo}
                percentage={(currentIndex + 1) * (100 / slides.length)}
            />
        </View>
    );
}

export default Onboarding;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})