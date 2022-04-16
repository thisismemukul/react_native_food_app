import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { showCart, clearCart } from '../helper/Carthelper';
import { RectButton } from '../components';
import { COLORS, FONTS, SIZES, allRestaurants, popularBrands, zomatoData, popularDishes } from "../constants";

// const Cart = ({ navigation, route }) => {
const Cart = () => {
  // const { items } = route.params;
  const [products, setProducts] = useState([]);
  // console.log('cart', products);
  useEffect(() => {
    // setProducts(showCart());
    showCart().then(res => {
      setProducts(res)
    })
  }, [])
  return (
    <View>
      {products && products.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.id}</Text>
            <TouchableOpacity onPress={clearCart} >
              <Text>Clear Storage</Text>
            </TouchableOpacity>
          </View>
        )
      })}
      {!products && <Text>Cart is Empty</Text>}
    </View>
  )
}

export default Cart;