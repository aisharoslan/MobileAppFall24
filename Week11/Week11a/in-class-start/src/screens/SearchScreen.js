import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults' // no curly braces because default export, not named export
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  console.log(JSON.stringify(results, null, 2))
  return (
    <View>
      {/* <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} /> */}
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)} 
      />

      {/* conditional rendering */}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Text style={styles.results}>We found {results.length} results!</Text>
      <ResultsList title="Cheap" results={results}/>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: 'orangered',
    fontStyle: 'italic',
    marginHorizontal: 15
  },
  results: {
    marginHorizontal: 15, 
    marginTop: 15
  }
})

export default SearchScreen
