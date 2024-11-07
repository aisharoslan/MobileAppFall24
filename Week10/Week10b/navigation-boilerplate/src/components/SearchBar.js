import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SearchBar = (props) => {
    const { term, onTermChange, onTermSubmit } = props
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome name="search" size={33} color="#111" />
            <TextInput 
                style={styles.inputStyle} 
                autoCapitalize="none" 
                autoCorrect={false} 
                value={term} 
                onChangeText={onTermChange} // built-in when typing
                onEndEditing={onTermSubmit} // built-in when done using keyboard
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        marginTop: 5,
        marginHorizontal: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    inputStyle: {
        marginLeft: 10,
        fontSize: 16,
        height: 30,
        backgroundColor: '#DDD',
        flex: 1, // grow and fill whatever extra space you can fill up
        borderRadius: 5,
        paddingHorizontal: 5,
    }
})

export default SearchBar