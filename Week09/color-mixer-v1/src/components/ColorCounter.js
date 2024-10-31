import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ColorCounter = (props) => {
    const {color, onIncrease, onDecrease} = props
    return (
      <View>
        <Text>{color}</Text>
        <Button title={`+ Increase ${color}`} onPress={() => onIncrease()} />
        <Button title={`- Decrease ${color}`} onPress={() => onDecrease()} />
      </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({})