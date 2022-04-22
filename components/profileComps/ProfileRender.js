import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets, categoryItems, slides } from "../../constants";
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RectButton } from '../Buttons';


const ProfileRender = ({ item }) => {
  const [checked, setChecked] = React.useState('first');
  const handlePress = () => {
   alert(`Pay Now using: ${checked}`);
};
  return (
    <View style={{ zIndex: 0, padding: SIZES.extraLarge }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: COLORS.offwhite,
          margin: SIZES.base, borderRadius: 10, overflow: "hidden"
        }}
      >
        <View style={{ width: 150, height: 150 }}>
          <Image
            source={assets.curUser}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ flex: 1, margin: SIZES.base, padding: 10, width: 155, alignItems: "flex-start", }}>
          <Text style={{ color: COLORS.dark, fontFamily: FONTS.bold, }}>{item.title}</Text>
          <Text style={{ color: COLORS.dark, fontFamily: FONTS.regular, }}>{item.email}</Text>
          <Text style={{ color: COLORS.dark, fontFamily: FONTS.regular, }}>{item.phone}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.offwhite,
          margin: SIZES.base, borderRadius: 10, overflow: "hidden"
        }}
      >
        <View style={{ flex: 1, margin: SIZES.base, padding: 10, width: 155, alignItems: "flex-start", }}>
          <Text style={{ color: COLORS.dark, fontFamily: FONTS.bold, textDecorationLine: "underline", textDecorationColor: COLORS.primary }}>Payment Methods</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10, overflow: "hidden"
        }}
      >
        <View style={{ width: 300, height: 300 }}>
          <Image
            source={assets.creditImage}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          padding: SIZES.base,
          borderRadius: 10, overflow: "hidden",
        }}
      >
        <Text style={{ color: COLORS.dark, fontFamily: FONTS.medium, }}>Add New Payment Method</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          padding: SIZES.base,
          borderRadius: 10, overflow: "hidden",
        }}
      >
        <RadioButton.Group onValueChange={checked => setChecked(checked)} value={checked}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: SIZES.base, borderRadius: 10, overflow: "hidden"
            }}
          >
            <Ionicons name={assets.gpayIcon} size={SIZES.extraLarge} color={COLORS.primary} />
            <RadioButton.Item color={COLORS.primary} uncheckedColor={COLORS.secondary} label="Google Pay" value="Google Pay" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: SIZES.base, borderRadius: 10, overflow: "hidden"
            }}
          >
            <Ionicons name={assets.creditIcon} size={SIZES.extraLarge} color={COLORS.primary} />
            <RadioButton.Item color={COLORS.primary} uncheckedColor={COLORS.secondary} label="Credit Card" value="Credit Card" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: SIZES.base, borderRadius: 10, overflow: "hidden"
            }}
          >
            <Ionicons name={assets.amazonpayIcon} size={SIZES.extraLarge} color={COLORS.primary} />
            <RadioButton.Item color={COLORS.primary} uncheckedColor={COLORS.secondary} label="Amazon Pay" value="Amazon Pay" />
          </View>
        </RadioButton.Group>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10, overflow: "hidden"
        }}
      >
      <RectButton handlePress={handlePress} item={item} minWidth={328} bgColor={COLORS.primary} textColor={COLORS.white} text="Pay Now" />
    </View>
    </View>
  )
}

export default ProfileRender