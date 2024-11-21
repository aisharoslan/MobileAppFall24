import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DiaryContext from '../context/DiaryContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ViewScreen = ({navigation}) => {
  const id = navigation.getParam('id') // get from id passed in from caller (IndexScreen)
  const { state } = useContext(DiaryContext)
  // array.find to find proper context - kinda like filter - return first one to equal true
  const post = state.find((diaryPost) => diaryPost.id === id)
  return (
    <View>
      <Text>{post.title} - {post.id}</Text>
      <Text>{post.content}</Text>
    </View>
  )
}

ViewScreen.navigationOptions = ({navigation}) => {
  const id = navigation.getParam('id') 
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
        {/* style with font size if want even bigger */}
        <FontAwesome 
        name="pencil" 
        size={30} 
        color="#666" 
        style={styles.editIcon} />
      </TouchableOpacity >
    )
  }
}

const styles = StyleSheet.create({
  editIcon: {
    marginRight: 10,
  }
})

export default ViewScreen