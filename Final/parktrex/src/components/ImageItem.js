import {StyleSheet, View, Image} from 'react-native'
import React from 'react'

const ImageItem = ({result}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.url}} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  }
})

export default ImageItem
