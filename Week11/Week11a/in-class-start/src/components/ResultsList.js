import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import ResultItem from '../components/ResultItem'

const ResultsList = (props) => {
  const {title, results} = props
  return (
    <View style={styles.view}>
      <Text>{title}</Text>
      <FlatList 
        horizontal
        data={results}
        keyExtractor={(result) => {
          return result.id
        }}
        renderItem={({item}) => {
          return <ResultItem result={item} />
            // <View style={styles.container}>
            //   <Text>{item.name}</Text>
            //   {/* needs width or height to know how big it is */}
            //   <Image source={{uri: item.image_url}} style={styles.img} />
            // </View>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 15,
    marginTop: 15
  },
  // container: {
  //   marginLeft: 15
  // },
  // img: {
  //   width: 250,
  //   height: 150,
  //   borderRadius: 5,
  //   marginBottom: 5
  // }
})

export default ResultsList