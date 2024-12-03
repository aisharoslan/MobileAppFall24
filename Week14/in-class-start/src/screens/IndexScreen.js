import React, {useContext, useEffect} from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import {Context} from '../context/DiaryContext'

const IndexScreen = ({navigation}) => {
  const {state, deleteDiaryPost, getDiaryPosts} = useContext(Context)

  // when u go back, x destroy index screen - we need to destroy and mount back
  useEffect(() => {
    getDiaryPosts()

    // when navigate back to Index Screen, we call it again
    // store in variable so that avoid memory leak
    const listener = navigation.addListener('didFocus', () => {
      getDiaryPosts()
    })

    // if u return something (like a callback function) inside useEffect, it'll be called when component is destroyed. This is where we cleanup listeners. Remove listener when component is destroyed.
    return () => {
      listener.remove()
    }
  }, []) // only want to run ON MOUNT - when component first loaded and created - if wanna watch for some variable can pass it in here - just run it once in mount, if no [], it'll happen everytime component re-renders - infinite

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('View', {id: item.id})}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                <MaterialIcons name="delete" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <MaterialIcons
          style={styles.addIcon}
          name="add"
          size={30}
          color="#666"
        />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
  },
  title: {
    fontSize: 18,
  },
  addIcon: {
    marginRight: 10,
  },
})

export default IndexScreen
