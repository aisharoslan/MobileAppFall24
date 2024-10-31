import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ColorCounter from '../components/ColorCounter'

// constant for configuration

const COLOR_INCREMENT = 10

const ColorMixerScreen = () => {
    const [ red, setRed ] = useState(0) // 0 is black, 255 is white
    const [ green, setGreen ] = useState(0)
    const [ blue, setBlue ] = useState(0)

    console.log('red', red)
    console.log('blue', blue)
    console.log('green', green)
    
    // pass in a color and how much to change by
    const setColor = (color, change) => {
        // color = red || green || blue
        // change = COLOR_INCREMENT
        switch (color) {
            case 'red':
                (red + change > 255 || red + change < 0) ? null : setRed(red + change)
                return
            case 'green':
                (green + change > 255 || green + change < 0) ? null : setGreen(green + change)
                return
            case 'blue':
                (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change)
                return
            default:
                return
        }
    }

    // onIncrease = () => {
    //     setRed(red + 1)
    // }

    // onDecrease = () => {
    //     setRed(red - 1)
    // }

    return (
        <View>
            <Text style={styles.title}>Mix-O-Matic</Text>
            <ColorCounter 
                color="Red" 
                onIncrease={() => setColor('red', COLOR_INCREMENT)} 
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            />
            <ColorCounter 
                color="Green" 
                onIncrease={() => setColor('green', COLOR_INCREMENT)} 
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            />
            <ColorCounter 
                color="Blue" 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
            />
            <View style={{ height:100, width: '100%', backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    )
}

export default ColorMixerScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#006FFF',
    }
})