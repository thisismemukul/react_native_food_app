import { TouchableOpacity, Animated, View, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants'
import Svg, {
    G,
    Circle,
} from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const NextButton = ({ percentage, scrollTo }) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);


    // const animation = (toValue) => {
    //     return Animated.timing(progressAnimation,{
    //       toValue,
    //       duration: 250,
    //       useNativeDriver:true,
    //     }).start()
    //   };
    //return an animated function that use the progressAnimation


    // useEffect(() => {
    //   animation(percentage);
    // }, [percentage]);


    // useEffect(() => {
    //     progressAnimation.addListener(({ value }) => {
    //         const strokeDashoffset = circumference - (circumference * value.value) / 100;
    //         if (progressRef?.current) {
    //             progressRef.current.setNativeProps({
    //                 strokeDashoffset,
    //             })
    //         }
    //     }, [percentage]);
    //     return()=>{
    // progressAnimation.removeAllListeners();
    //     };
    // },[]);

    return (
        <View style={styles.container}>

            <Svg height={size} width={size}>
                <G rotation="-90" origin={center}>
                    <Circle stroke={COLORS.secondary} strokeWidth={strokeWidth} cx={center} cy={center} r={radius} />
                    <Circle
                        ref={progressRef}
                        stroke={COLORS.primary}
                        strokeWidth={strokeWidth}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (circumference * 33.33) / 100}
                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                <Ionicons name="arrow-forward" size={16} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.extraLarge,
    }
})

