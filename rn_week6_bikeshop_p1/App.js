import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PowerBikeShop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A premium online store for sporter and their stylish choice</Text>
      <View style={styles.imageContainer}>
        <Image source={require('./xedap.png')} style={styles.image} />
      </View>
      <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 350,
    borderRadius: 20,
    backgroundColor: '#fbe3e4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PowerBikeShop;
