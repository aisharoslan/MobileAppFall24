import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import DiaryContext from '../context/DiaryContext'

const CreateScreen = ({ navigation }) => {
  const { addDiaryPost } = useContext(DiaryContext)
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  return (
    <View>
      <Text style={styles.label}>Title: </Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} autoComplete={false} autoCapitalize='words' />

      <Text style={styles.label}>Content: </Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input} autoComplete={false} autoCapitalize='sentences' />

      <Button 
        title="Save Post" 
        onPress={() => {
          addDiaryPost(title, content, () => navigation.navigate('Index'))
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    margin: 10,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#666',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5
  }
})

export default CreateScreen