import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Rating = ({ rating, setRating }) => {
  const handleIncrease = () => {
    if (rating < 5) setRating(rating + 1);
  };

  const handleDecrease = () => {
    if (rating > 0) setRating(rating - 1);
  };

  return (
    <View style={styles.ratingContainer}>
      <TouchableOpacity onPress={handleDecrease}>
        <AntDesign name="minus" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <AntDesign
            key={index}
            name={index < rating ? 'star' : 'staro'}
            size={50}
            color={index < rating ? '#ADDC67' : '#ADDC67'}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleIncrease}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  }
})

export default Rating