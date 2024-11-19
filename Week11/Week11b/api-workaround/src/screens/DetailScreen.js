import React, {useState, useEffect} from 'react'
import {FlatList, StyleSheet, Text, View, Image, Linking} from 'react-native'
import yelp from '../api/yelp'
import Entypo from '@expo/vector-icons/Entypo';

const DetailScreen = (props) => {
  const {navigation} = props
  const id = navigation.getParam('id')
  console.log(id)

  const [result, setResult] = useState(null)

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`)
      console.log(JSON.stringify(response.data, null, 2))
      setResult(response.data)
    }
    catch (err) {
      console.log(err)
    }
    
  }

  // use effect with empty [] second argument to avoid loop, and only call once on mount
  useEffect(() => {
    getResult(id)
  }, []) // make sure u have the empty array to avoid infinite loop!

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const handlePress = () => {
    Linking.openURL(result?.url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result?.name}</Text>
      <Text style={styles.rating}>
        {result?.rating} Stars, {result?.review_count} Reviews
      </Text>
      <Text onPress={handlePress} style={styles.website}>Website</Text>
      <Text style={styles.phone}>
        <Entypo name="phone" size={24} color="black" /> {result?.display_phone}
      </Text>
      <Image
        source={{ uri: result?.image_url }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  rating: {
    marginTop: 5,
    marginBottom: 20
  },
  website: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  phone: {
    marginTop: 15,
    marginBottom: 20
  }
})