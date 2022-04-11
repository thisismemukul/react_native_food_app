import { View, StyleSheet, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants';

const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnboardingItem
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        flex: 0.7,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10,
        color: COLORS.dark,
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: COLORS.dark,
        textAlign: 'center',
        paddingHorizontal: 64,
    },
});