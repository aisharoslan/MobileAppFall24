// rnfes
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ImageCard from '../components/ImageCard'

const ImageScreen = () => {
    const chickens = [
        {name: 'Bilbo Baggins', src: require('../../assets/bilbo-baggins.png')},
        {name: 'Cameron Poe', src: require('../../assets/cameron-poe.png')},
        {name: 'Pollux Troy', src: require('../../assets/pollux-troy.png')},
        {name: 'Nikki Cage', src: require('../../assets/nikki-cage.png')},
    ]

    return (
        <View>
        <Text>ImageScreen</Text>

        {/* keyExtractor to identify item */}
        <FlatList
            alwaysBounceVertical
            data={chickens}
            keyExtractor={(chicken) => chicken.name}
            renderItem={({item}) => {
                return <ImageCard name={item.name} src={item.src}/>
            }}
        />

        {/* if u hard code the image card - they're not scrollable */}
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen