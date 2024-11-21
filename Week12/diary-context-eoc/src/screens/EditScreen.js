import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import DiaryContext from '../context/DiaryContext'

const EditScreen = ({ navigation }) => {
    // initial state is from context
    const id = navigation.getParam('id')
    const { state, editDiaryPost } = useContext(DiaryContext)
    const post = state.find((diaryPost) => diaryPost.id === id)

    const [ title, setTitle ] = useState(post.title)
    const [ content, setContent ] = useState(post.content)

    return (
        <View>
        <Text style={styles.label}>Title: </Text>
        <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} autoComplete={false} autoCapitalize='words' />

        <Text style={styles.label}>Content: </Text>
        <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input} autoComplete={false} autoCapitalize='sentences' />

        <Button 
            title="Edit Post" 
            onPress={() => {editDiaryPost(id, title, content, () => navigation.navigate('View', {id}))}}
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

export default EditScreen