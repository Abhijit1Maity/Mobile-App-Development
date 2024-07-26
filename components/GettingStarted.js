import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const GettingStarted = ({ navigation, onNext }) => {
  return (
    <ImageBackground source={{ uri: 'https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg?t=st=1721125099~exp=1721128699~hmac=bf19afcd2adf7548bfabbfbb458bf86aec8376088eccef920b4be08f9e73be28&w=1060' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Getting Started</Text>
        <Button title="Get Started" onPress={onNext} />
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
});

export default GettingStarted;

