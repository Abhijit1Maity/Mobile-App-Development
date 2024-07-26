import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FavouriteContext } from './FavouriteContext';

const Card = ({ item, onPress }) => {
  const { state, addToFavourite, removeFromFavourite } = useContext(FavouriteContext);

  const isFavourite = state.favourites.some(favItem => favItem.id === item.id);

  const handleFavouriteToggle = () => {
    if (isFavourite) {
      removeFromFavourite(item.id);
    } else {
      addToFavourite(item);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleFavouriteToggle}
        >
          <Text style={styles.buttonText}>{isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  details: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Card;
