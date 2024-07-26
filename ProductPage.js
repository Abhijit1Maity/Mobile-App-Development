import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { FavouriteContext } from './FavouriteContext';
import Card from './Card';

const products = [
  { id: 1, name: 'Sample Product 1', imageUri: 'https://img.freepik.com/free-photo/close-up-shot-blue-glass-bottle_23-2148247904.jpg', price: 10.99 },
  { id: 2, name: 'Sample Product 2', imageUri: 'https://img.freepik.com/free-photo/close-up-shot-red-glass-bottle_23-2148247905.jpg', price: 15.99 },
  { id: 3, name: 'Sample Product 3', imageUri: 'https://img.freepik.com/free-photo/close-up-shot-green-glass-bottle_23-2148247906.jpg', price: 12.99 },
  // Add more products as needed
];

const ProductPage = ({ navigation }) => {
  const { addToFavourite } = useContext(FavouriteContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Page</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('FavouriteScreen')}
          />
        )}
      />
      <Button title="Go to Favourites" onPress={() => navigation.navigate('FavouriteScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProductPage;
