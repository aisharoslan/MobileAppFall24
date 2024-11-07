import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SquareScreen = () => {
  return (
    <View>
      <Text styles={styles.text}>BoxModel</Text>
      <View style={styles.parentStyle}>
        <Text style={styles.childOneStyle}>Child 1</Text>
        <Text style={styles.childTwoStyle}>Child 2</Text>
        <Text style={styles.childThreeStyle}>Child 3</Text>
      </View>

      <Text styles={styles.text}>Flexbox</Text>
      <View style={styles.parent2Style}>
        <Text style={styles.childOne2Style}>Child 1</Text>
        <Text style={styles.childTwo2Style}>Child 2</Text>
        <Text style={styles.childThree2Style}>Child 3</Text>
      </View>

      <Text styles={styles.text}>Positioning</Text>
      <View style={styles.parent3Style}>
        <Text style={styles.childOne3Style}>Child 1</Text>
        <Text style={styles.childTwo3Style}>Child 2</Text>
        <Text style={styles.childThree3Style}>Child 3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 15,
    color: 'red'
  },
  parentStyle: {
    marginVertical: 30, // top bottom
    marginHorizontal: 15, // left right
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10
  },
  childOneStyle: {
      height: 80,
      width: 80,
      backgroundColor: 'red' // wants to fill up as much space as it can
  },
  childTwoStyle: {
      height: 80,
      width: 80,
      backgroundColor: 'green',
      alignSelf: 'flex-end', // how u override alignItems in parent
  },
  childThreeStyle: {
      height: 80,
      width: 80,
      backgroundColor: 'blue',
  },
  parent2Style: {
    marginVertical: 30, // top bottom
    marginHorizontal: 15, // left right
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
    padding: 10
  },
  childOne2Style: {
      height: 80,
      width: 80,
      backgroundColor: 'red' // wants to fill up as much space as it can
  },
  childTwo2Style: {
      height: 80,
      width: 80,
      backgroundColor: 'green',
      alignSelf: 'flex-end', // how u override alignItems in parent
  },
  childThree2Style: {
      height: 80,
      width: 80,
      backgroundColor: 'blue',
  },
  parent3Style: {
    marginVertical: 30, // top bottom
    marginHorizontal: 15, // left right
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
    padding: 10
  },
  childOne3Style: {
      height: 80,
      width: 80,
      backgroundColor: 'red' // wants to fill up as much space as it can
  },
  childTwo3Style: {
      height: 80,
      width: 80,
      backgroundColor: 'green',
      alignSelf: 'flex-end', // how u override alignItems in parent
  },
  childThree3Style: {
      height: 80,
      width: 80,
      backgroundColor: 'blue',
  }
})
export default SquareScreen