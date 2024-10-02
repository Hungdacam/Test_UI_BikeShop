import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const bikes = [
  { id: '1', name: 'Pinarello', price: 1800, image: require('./xedap.png') },
  { id: '2', name: 'Pina Mountai', price: 1700, image: require('./xe2.png') },
  { id: '3', name: 'Pina Bike', price: 1500, image: require('./xe3.png') },
  { id: '4', name: 'Pinarello', price: 1900, image: require('./xe4.png') },
  { id: '5', name: 'Pinarello', price: 2700, image: require('./xe5.png') },
  { id: '6', name: 'Pinarello', price: 1350, image: require('./xe2.png') },
];

const BikeCard = ({ bike }) => (
  <View style={styles.card}>
    <Image source={bike.image} style={styles.image} />
    <Text style={styles.name}>{bike.name}</Text>
    <Text style={styles.price}>${bike.price}</Text>
  </View>
);

const BikeList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The World's Best Bike</Text>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <BikeCard bike={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'#E94141'
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  filterText: {
    fontSize: 16,
    color: '#f55',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: '#f55',
    marginTop: 5,
  },
});

export default BikeList;
