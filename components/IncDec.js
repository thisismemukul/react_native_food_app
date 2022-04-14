import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { RectButton } from './Buttons';
import { COLORS, assets, SIZES } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IncDec = () => {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    function ButtonIncrement(props) {
        return (
            // <button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
            //     <Text>      +1</Text>
            // </button>
            <Ionicons onPress={props.onClickFunc} name={assets.backIcon} size={SIZES.extraLarge} color={COLORS.dark} />

        )
    }
    function ButtonDecrement(props) {

        return (
            // <button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
            //     <Text>     -1</Text>
            // </button>
            <Ionicons onPress={props.onClickFunc} name={assets.backIcon} size={SIZES.extraLarge} color={COLORS.dark} />

        )
    }
    function Display(props) {
        return (
            // <Text style={{ marginLeft: '.5rem' }} >{props.message}</Text>

            <TextInput
                placeholder={props.message}
                // onChange={handleChange}
                // value={num}
            />
        )
    }


    return (
        <View>
            <ButtonIncrement onClickFunc={incrementCounter} />
            <Display message={counter} />
            <ButtonDecrement onClickFunc={decrementCounter} />

        </View>
    )
}

export default IncDec;