import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const ParkItem = ({item}) => {
  return (
      <View style={styles.container}>
        <Image source={{uri: item.images[0].url}} style={styles.img} />
        <Text style={styles.name}>{item.fullName}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 28,
      position: 'relative',
      width: '87%',
      height: '50px',
      marginBottom: 10
    },
    name: {
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 10,
      left: 10,
      paddingRight: 15,
      color: 'white',
      fontSize: 18
    },
    img: {
      width: '100%',
      height: '100%',
      borderRadius: 5
    }
})

export default ParkItem