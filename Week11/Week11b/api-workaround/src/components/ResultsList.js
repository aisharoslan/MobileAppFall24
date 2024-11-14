import React from 'react'
import { withNavigation } from 'react-navigation' // this is to allow us to extract the navigation object
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native'
import ResultItem from './ResultItem'

const ResultsList = (props) => {
  const {title, results, navigation} = props // we get navigation for free (look at bottom of file)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      { results.length === 0 ? 
        <Text style={styles.noResults}>No results in this price range!</Text> : 
        (
          <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => {
              return result.id
            }}
            // item and index in renderItem's param list is built-in, not ur own
            renderItem={({item}) => {
              return (
                // can pass params into navigation, like querystring or url - navigation props
                <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                  <ResultItem result={item} />
                </TouchableOpacity>
              )
            }}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 30
  },
  title: {
    // 14px default, not 16px like website
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: 15
  },
  noResults: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginTop: 30,
  }
})

export default withNavigation(ResultsList)