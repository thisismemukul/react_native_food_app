import { View, SafeAreaView, Text, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import { RectButton } from '../components';

import { COLORS, SIZES, FONTS, assets, zomatoData } from '../constants';
import {
  DetailsHeader,
  FocusedStatusBar,
  CartRender,
  LikeButton
} from '../components';
const Cart = ({ navigation, route }) => {
  // const navigation = useNavigation();
  // const [cart, setCart] = useState([]);
  // if (route.params == undefined) {
  //   alert("empty cart")
  //   navigation.goBack('Home');
  // } else {
  //   const { item } = route.params;
  //   setCart(item);
  // }
  const cart = route.params?.item;
  console.log("cart", cart);
  if (cart == undefined) {
    alert("empty cart")
    // navigation.goBack('Home');
  }
  // console.log("route.params",cart);
  // useEffect(() => {
  //   showCart().then(res => {
  //     // setProducts(res)
  //   });
  // }, [])
  const getAmount = () => {
    let amount = 0;
    cart && cart.map(p => {
      amount = amount + p.price;
    });
    return amount;
  };
  const getShipping = () => {
    let amount = 0;
    let shipping = 0;
    cart && cart.map(p => {
      amount = amount + p.price;
      shipping = (amount * '.05').toFixed(2);
    });
    return shipping;
  };
  const getTotal = () => {
    var total = Number(getAmount()) + Number(getShipping());
    return total;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{ zIndex: 0 }}>
        <DetailsHeader title="Cart" />
        <ScrollView style={{ height: 500, marginBottom: 100 }}>
          <CartRender item={cart} />
        </ScrollView>
        <View>
          <View style={{
            padding: SIZES.large, flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Text style={{ color: COLORS.dark }}>Sub Total </Text>
            <Text style={{ color: COLORS.dark }}>₹{getAmount()}</Text>
          </View>
          <View style={{
            padding: SIZES.large, flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Text style={{ color: COLORS.dark }}>Shipping </Text>
            <Text style={{ color: COLORS.dark }}>₹{getShipping()}</Text>
          </View>
          <View style={{
            padding: SIZES.large, flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Text style={{ color: COLORS.dark }}>Total Amount </Text>
            <Text style={{ color: COLORS.dark }}>₹{getTotal()}</Text>
          </View>
        </View>
        <View style={{
          padding: SIZES.large, flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <RectButton text="Checkout" item_icon={assets.heartIcon} minWidth={150} bgColor={COLORS.primary} borderColor={COLORS.dark} textColor={COLORS.white} />
        </View>
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
        <View style={{
          flex: 1, backgroundColor: COLORS.white, borderTopLeftRadius: SIZES.extremeLarge,
          borderTopRightRadius: SIZES.extremeLarge,
        }} />
      </View>
    </SafeAreaView >
  )
}

export default Cart;