import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import DiaryContext from '../context/DiaryContext'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const IndexScreen = () => {
  const {data, addDiaryPost, deleteDiaryPost } = useContext(DiaryContext)
  return (
    <View>
      <Button title="Add Post" onPress={addDiaryPost} />
      <FlatList
        data={data}
        keyExtractor={(post) => post.title} // unique and unchanging
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
              <MaterialIcons name="delete" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#666',
    marginHorizontal: 15,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
  }
})

export default IndexScreen