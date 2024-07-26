import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FavouriteContext, actionTypes } from './FavouriteContext';

const FavouriteScreen = ({ navigation }) => {
  const { state, removeFromFavourite } = useContext(FavouriteContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.productName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => removeFromFavourite(item.id)}
      >
        <Text style={styles.buttonText}>Remove from Favourite</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={state.favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default FavouriteScreen;

