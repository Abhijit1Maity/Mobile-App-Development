   import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Switch } from 'react-native';

const Welcome = ({ userName, onLogout, onProductPage, onFavouritesPage, darkMode, onToggleDarkMode }) => {
  return (
    <ImageBackground source={{ uri: 'https://img.freepik.com/free-photo/sunset-sky-at-tokyo-japan_1150-13237.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome, {userName}!</Text>
        <Button title="Go to Products" onPress={onProductPage} />
        <Button title="Go to Favourites" onPress={onFavouritesPage} />
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={onToggleDarkMode} />
        </View>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    marginRight: 10,
  },
});

export default Welcome;
