import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TutorialScreen = () => {
  return (
    <View>
      {/* <Text style={{fontSize: 60}}>Tutorial Screen</Text> */}
      <Text style={styles.blueText}>Tutorial Screen</Text>
      <Text>Tutorial Screen</Text>
    </View>
  )
}

// validated css in here
const styles = StyleSheet.create({
    blueText: {
        color: '#006fff',
        fontSize: 36,
    }
})

export default TutorialScreen