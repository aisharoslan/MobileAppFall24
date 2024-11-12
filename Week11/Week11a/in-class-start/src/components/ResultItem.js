import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultItem = (props) => {
    const {result} = props
    return (
        <View style={styles.container}>
            <Text>{result.name}</Text>
            {/* needs width or height to know how big it is */}
            <Image source={{uri: result.image_url}} style={styles.img} />
        </View>
    )
}

export default ResultItem

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    img: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    }
})