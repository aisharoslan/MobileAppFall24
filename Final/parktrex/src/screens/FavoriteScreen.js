import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ParkCard from '../components/ParkCard';
import { Context as ParkContext } from '../context/ParkContext';

const FavoriteScreen = ({ navigation }) => {
  const { state, getParks, deletePark } = useContext(ParkContext);

  useEffect(() => {
    getParks();

    const listener = navigation.addListener('didFocus', () => {
      getParks();
    });

    return () => {
      listener.remove();
    };
  }, []);

  const handleAddPark = () => {
    navigation.navigate('ActivityCreate');
  };

  const handleEditPark = (id) => {
    navigation.navigate('ActivityEdit', { id: id });
  }

  const handleDelete = (id) => {
    deletePark(id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aisha's Park Favorites</Text>
        <TouchableOpacity onPress={handleAddPark}>
          <AntDesign name="pluscircle" size={30} color="#ADDC67" />
        </TouchableOpacity>
      </View>
      {state.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Parks Yet</Text>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.cornerTitle}>CA</Text>
          <FlatList
            data={state}
            keyExtractor={(park) => park.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('ActivityView', { id: item.id })}>
                <ParkCard activity={item.title} id={item.id} onDelete={handleDelete} onEdit={handleEditPark} />
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    position: 'relative',
    flex: 1,
  },
  cornerTitle: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});

export default FavoriteScreen;
