import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxModelScreen = () => {
  return (
    <View>
      <Text>BoxModelScreen</Text>
      {/* default is flex col and align stretch, if u x specify width, it'll stretch to fill entire space - can override with width*/}
      {/* in web browser, by default position static, if want absolute, parent is relative */}
      {/* default: display flex - position relative - flex col - align items stretch */}
      <View style={styles.parentStyle}>
        <Text style={styles.childOneStyle}>Child 1</Text>
        <Text style={styles.childTwoStyle}>Child 2</Text>
        <Text style={styles.childThreeStyle}>Child 3</Text>
        <Text style={styles.lastChild}>Last Child</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentStyle: {
        marginVertical: 30, // top bottom
        marginHorizontal: 15, // left right
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    childOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        flex: 1 // wants to fill up as much space as it can
    },
    childTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end', // how u override alignItems in parent
    },
    childThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        flex: 2 // overrides height
    },
    lastChild: {
        // height: 50,
        // width: 50,
        backgroundColor: 'purple',
        position: 'absolute', // covers up first child - still obeys flex rules - still align center
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

// margin, padding, width, height
// flexbox
// positioning properties

export default BoxModelScreen