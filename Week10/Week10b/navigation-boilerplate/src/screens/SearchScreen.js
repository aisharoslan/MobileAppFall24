import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  // user never get error if no internet - so need error if failed search for lotsa reasons - service sucks
  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50, // how many results
        term: term, // term is their params
        location: 'NYC',
      },
    })
    setResults(response.data.businesses)
  }

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={searchApi}
      />
      <Text>We found {results.length} results!</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
