import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const FlagScreen = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error.message);
      }
    };

    fetchCountries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drapeaux du Monde</Text>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.alpha3Code}
        renderItem={({ item }) => (
          <View style={styles.countryCard}>
            <Image source={{ uri: item.flags.png }} style={styles.flag} />
            <Text style={styles.countryName}>{item.name}</Text>
            <Text>Population: {item.population}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryCard: {
    marginBottom: 20,
    alignItems: 'center',
  },
  flag: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlagScreen;
