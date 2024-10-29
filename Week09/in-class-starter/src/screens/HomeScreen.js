import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

const HomeScreen = (props) => {
  // console.log(props.navigation) // a lot of props for free - programmatic navigation
  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      {/* <Text style={styles.textStyle}>This is some more text</Text> */}

      {/* no open close tag for button - it's a self-closing tag and takes in react-primitive props (text inside button is title) */}
      {/* onPress instead of onClick */}
      <Button title="Go to Tutorial Screen"
      onPress={() => props.navigation.navigate('Tutorial')}/>
      <Button title="Go to List Screen" 
      onPress={() => props.navigation.navigate('List')}/>
      <Button title="Go to Image Screen" 
      onPress={() => props.navigation.navigate('Image')}/>
      <Button title="Go to Color Screen" 
      onPress={() => props.navigation.navigate('Color')}/>
      
      {/* has opening closing tag */}
      {/* can put whatever thing in here, images, text, cards etc, but button is limited, only that text */}
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Screen</Text>
        <Text>Go to List Screen</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'red',
  },
})

export default HomeScreen
