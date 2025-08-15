import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'
import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ParkItem from '../components/ParkItem'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={async () => await searchApi(term)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Text style={styles.text}>We found {results.length} results!</Text>
      {results.length === 0 ? (
        <Text style={styles.text}>No parks found. Try a different state code.</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={true}
          scrollEnabled={true}
          removeClippedSubviews={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.view}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ParkView', {
                parkCode: item.parkCode, parkName: item.fullName
              }
              )}>
              <ParkItem item={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  view: {
    marginBottom: 10
  },
  error: {
    fontSize: 12,
    color: 'orangered',
    fontStyle: 'italic',
    marginHorizontal: 15,
  },
  listContainer: {
    paddingBottom: 30,
    marginTop: 20,
    flexGrow: 1
  },
  text: {
    fontSize: 15,
    marginHorizontal: 30,
    marginTop: 15,
  }
})

export default SearchScreen
