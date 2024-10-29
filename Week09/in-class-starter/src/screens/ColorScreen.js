import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

const ColorScreen = () => {
  const [ colors, setColors ] = useState([])
  //console.log(colors)
  return (
    <View>
      <Text>Color Screen</Text>
      <Button title="Add a New Color" onPress={() => {
        setColors([...colors, randomRGB()]) // the re-rendering, calls randomRGB() each time in View
      }}/>

      {/* View just like a div - here self closing so it's just a box */}
      {/* <View style={{ height: 100, width: '100%', backgroundColor: randomRGB()}} /> */}

      <FlatList 
        data={colors}
        keyExtractor={(color) => color} 
        renderItem={({item}) => {
          return (
            <View
              style={{ height: 100, width: '100%', backgroundColor: item }}
            />
          )
        }}
      />
    </View>
  )
}

const randomRGB = () => {
  // only if Math.random() == 1 that we get an error
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({})

export default ColorScreen