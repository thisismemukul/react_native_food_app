import { View, Image, Text,TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../../constants';
import SvgUri from 'react-native-svg-uri';
import { useNavigation } from '@react-navigation/native'

const PopularCard = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ backgroundColor: COLORS.white, height: 192, marginStart: SIZES.base, borderRadius: 10, overflow: "hidden" }}>
                    <View>
                        {item.imgType === "SVG" ? <SvgUri
                            width="135"
                            height="105"
                            source={item.image}
                        /> : <Image source={item.image} style={{ width: 145, height: 125 }} />}
                    </View>
                    <View style={{ padding: 10, width: 155, alignItems: "center" }}>
                        <Text style={{ color: COLORS.dark, }}>{item.title}</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            {item.description}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PopularCard;