import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import ImageItem from '../components/ImageItem';
import specificResult from '../hooks/specificResult';
import AntDesign from '@expo/vector-icons/AntDesign';

const ParkViewScreen = ({ navigation, parkCode, parkName }) => {
  const [searchApi, result, errorMessage] = specificResult();

  const handlePress = () => {
    const url = result.url; // External website URL
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  const handleAddToFavorites = () => {
    // Navigate to favorites tab and add the park
    if (navigation.navigate) {
      navigation.navigate('ActivityCreate');
    }
  };

  useEffect(() => {
    const fetchParkData = async () => {
      await searchApi(parkCode);
    };

    fetchParkData();
  }, []);

  return (
    <View style={styles.screen}>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {/* Title and Heart Icon */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{result?.fullName}</Text>
        <TouchableOpacity onPress={handleAddToFavorites}>
          <AntDesign name="hearto" size={24} color="#ADDC67" />
        </TouchableOpacity>
      </View>

      {/* Operating Hours and Entrance Fee */}
      <View style={styles.infoContainer}>
        {/* Operating Hours */}
        <View style={styles.columnContainer}>
          <Text style={styles.subtitle}>Operating Hours</Text>
          <View>
            <Text>Monday: {result?.operatingHours?.[0]?.standardHours?.monday || 'N/A'}</Text>
            <Text>Tuesday: {result?.operatingHours?.[0]?.standardHours?.tuesday || 'N/A'}</Text>
            <Text>Wednesday: {result?.operatingHours?.[0]?.standardHours?.wednesday || 'N/A'}</Text>
            <Text>Thursday: {result?.operatingHours?.[0]?.standardHours?.thursday || 'N/A'}</Text>
            <Text>Friday: {result?.operatingHours?.[0]?.standardHours?.friday || 'N/A'}</Text>
            <Text>Saturday: {result?.operatingHours?.[0]?.standardHours?.saturday || 'N/A'}</Text>
            <Text>Sunday: {result?.operatingHours?.[0]?.standardHours?.sunday || 'N/A'}</Text>
          </View>
        </View>

        {/* Entrance Fee and Website */}
        <View style={styles.columnContainer}>
          <Text style={styles.subtitle}>Entrance Fee</Text>
          <Text style={styles.text}>{result?.entranceFees?.[0]?.cost || 'Free'}</Text>
          <Text style={styles.link} onPress={handlePress}>Website</Text>
        </View>
      </View>

      {/* Pictures */}
      <View>
        <Text style={styles.desc}>Pictures</Text>
        {result?.images ? (
          <FlatList
            horizontal
            data={result.images}
            keyExtractor={(image) => image.url}
            renderItem={({ item }) => <ImageItem result={item} />}
          />
        ) : (
          <Text style={styles.noResults}>No images available.</Text>
        )}
      </View>

      {/* Description */}
      <View>
        <Text style={styles.desc2}>Description</Text>
        <Text style={styles.text_desc}>{result?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
  },
  error: {
    fontSize: 12,
    color: 'orangered',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    flex: 1,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  columnContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 15
  },
  desc2: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 15
  },
  text: {
    fontSize: 12,
    marginBottom: 5
  },
  text_desc: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 15
  },
  link: {
    color: '#ADDC67',
    textDecorationLine: 'underline',
    fontSize: 15,
    marginTop: 30
  },
  noResults: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default ParkViewScreen;
