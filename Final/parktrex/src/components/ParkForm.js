import React, {useState} from 'react'
import {TouchableOpacity, StyleSheet, Text, TextInput, View} from 'react-native'
import Rating from './Rating'

const ParkForm = ({ onSubmit, initialValues = { title: '', content: '', rating: 0 }}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [rating, setRating] = useState(initialValues.rating);

  return (
    <View>
      <Text style={styles.title}>Add Park</Text>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.titleInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        multiline
        autoCorrect={false}
        style={styles.contentInput}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Text style={styles.label}>Rating:</Text>
      <Rating rating={rating} setRating={setRating} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onSubmit(title, content, rating);
        }}
      >
        <Text style={styles.save}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 15,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },
  label: {
    fontSize: 20,
    margin: 10,
    marginBottom: 5,
    marginHorizontal: 15
  },
  titleInput: {
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: '#ADDC67',
    color: 'black',
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: '5%'
  },
  contentInput: {
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: '#ADDC67',
    color: 'black',
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: '40%'
  },
  button: {
    backgroundColor: '#ADDC67',
    width: '40%',
    borderRadius: 5,
    position: 'absolute',
    top: 700,
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  save: {
    fontWeight: 500,
    fontSize: 20
  }
});


export default ParkForm;