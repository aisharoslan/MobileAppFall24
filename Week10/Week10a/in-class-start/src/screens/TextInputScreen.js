// react native functional export style sheet
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextInputScreen = () => {
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text style={{marginHorizontal: 15, marginTop: 15}}>Enter Password:</Text>
            {/* not wrapped in a form, it's basically a rn primitive that's an input field */}
            {/* by default everything is flexbox and align items stretch - take full width */}
            {/* can autocapitalize sentences/chars/words/none */}
            {/* autoCorrect is boolean */}
            {/* bind input to local state */}
            <TextInput 
                style={styles.input} 
                autoCapitalize='none' 
                autoCorrect={false} 
                value={password} 
                onChangeText={(newValue) => setPassword(newValue)}
                // newValue is event.target.value in React
            />

            {/* conditionally render smth or nothing, null means don't render anything */}
            {password.length < 5 ? <Text style={styles.error}>Password must be at least 5 characters long!</Text> : null}
            {/* <Text>My name is {name}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginHorizontal: 15
    }

})

export default TextInputScreen