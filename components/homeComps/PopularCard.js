import { View, Image, Text } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../../constants';
import SvgUri from 'react-native-svg-uri';

const PopularCard = ({ item }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: COLORS.white, height: 192, marginStart: SIZES.base, borderRadius: 10, overflow: "hidden" }}>
                <View>
                    {item.imgType === "SVG" ? <SvgUri
                        width="135"
                        height="105"
                        source={item.image}
                    /> : <Image source={item.image} style={{ width: 155, height: 135 }} />}
                </View>
                <View style={{ padding: 10, width: 155, alignItems: "center" }}>
                    <Text>{item.title}</Text>
                    <Text style={{ color: "#777", paddingTop: 5 }}>
                        {item.description}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default PopularCard;