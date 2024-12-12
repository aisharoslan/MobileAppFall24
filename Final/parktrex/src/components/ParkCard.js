import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ParkCard = ({ activity, id, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.activityText}>{activity}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onEdit(id)}>
          <MaterialCommunityIcons name="pencil" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <FontAwesome name="trash" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADDC67',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default ParkCard;
