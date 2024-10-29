import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Text - react native primitive component - like a p tag - any kind of text must be in TEXT TAG!!
// StyleSheet - class from react native with methods in it - one of it is 'create'
// View avoids using <> </>, gets only 1 top level element

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello Mobile React Native</Text>
      <Text style={styles.text}>This is some more text</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    // no kebabcase, all camelCase, no units, it's all 30px now
    // similar but little diff 
    fontSize: 30,
    color: 'red',
  },
});

export default HomeScreen;
