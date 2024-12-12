import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const SearchBar = (props) => {
  const {term, onTermChange, onTermSubmit} = props
  return (
    <View style={styles.background}>
        <TextInput
            placeholder="Search State"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
        <FontAwesome name="search" size={33} color="#ADDC67" />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    gap: 15,
    marginRight: 20
  },
  input: {
    marginLeft: 10,
    fontSize: 20,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flex: 1,
    backgroundColor: 'black',
    color: '#ADDC67'
  },
})

export default SearchBar