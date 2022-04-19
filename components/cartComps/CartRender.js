import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { showCart, clearCart } from '../../helper/Carthelper';
import Restaurants from '../homeComps/Restaurants';

const CartRender = ({ item }) => {
    // console.log("data",item);
    return (
        <View>
            <View>
                <TouchableOpacity onPress={clearCart} >
                    <Text>Clear Cart</Text>
                </TouchableOpacity>
                {!item && <Text>Cart is Empty</Text>}
            </View>
            <FlatList
                data={item}
                renderItem={({ item }) => <Restaurants item={item} />}
                bounces={true}
                keyExtractor={(item) => item.id + Math.random()}
            // scrollEventThrottle={32}
            />
        </View>
    )
}

export default CartRender