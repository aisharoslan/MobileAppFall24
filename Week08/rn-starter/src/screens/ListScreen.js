import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListScreen = () => {
    // never mutate original data
    const chickens = [
        {name: 'Silky Johnson'},
        {name: 'Bilbo Baggins'},
        {name: 'Castor Troy'},
        {name: 'Pollux Troy'},
        {name: 'Sean Archer'},
        {name: 'Cameron Poe'},
        {name: 'Nikki Cage'},
    ]

    return (
        <View>
            {/* // fixed at the top */}
            <Text style={styles.title}>ListScreen</Text>
            {/* This mapping function still works, but RN has an easier way */}
            {/* {chickens.map((chicken) => (
                <Text>{chicken.name}</Text>
            ))} */}

            {/* component that does mapping for us */}
            {/* renderItem - holds render function to generate the return thing */}
            {/* data and renderItem props sMUST be passed, but the others are optional */}
            <FlatList 
                horizontal // for horizontal scrolling
                // horizontal={false} - makes it vertical
                showsHorizontalScrollIndicator={false} // by default it shows
                data={chickens}
                // destructuring - taking out item attribute from the current chicken - must use the exact names of attributes
                renderItem={({item, index}) => {
                    // console.log(chicken) // chicken is an object with item, index etc..
                    // <Text>{chicken.name}</Text>
                    // console.log(item.name)
                    return <Text style={styles.itemStyle}>{item.name} at slot {index} </Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        marginVertical: 60,
        marginHorizontal: 10,
        fontSize: 24,
    },
    title: {
        fontSize: 60,
        color: 'red'
    }
})

export default ListScreen
