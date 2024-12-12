import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Context} from '../context/ParkContext';
import AntDesign from '@expo/vector-icons/AntDesign';

const ActivityViewScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const park = state.find((park) => park.id === id);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <View style={{marginTop: 15}}>  
          <AntDesign key={i} name="star" size={40} color="#ADDC67" />
        </View>
      );
    }
    return stars;
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{park.title}</Text>
      <View style={styles.boxContent}>
        <Text style={styles.subtitle}>Notes</Text>
      </View>
      <Text style={styles.content}>{park.content}</Text>
      <View style={styles.boxRating}>
        <Text style={styles.subtitle}>Rating</Text>
      </View>
      <View style={styles.ratingContainer}>
        {renderStars(park.rating)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 600
  },
  boxContent: {
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#ADDC67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '23%'
  },
  boxRating: {
    marginTop: 70,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#ADDC67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '23%'
  },
  content: {
    fontSize: 20,
    marginTop: 10
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default ActivityViewScreen;
