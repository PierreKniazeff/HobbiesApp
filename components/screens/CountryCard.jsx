import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CountryCard = ({ country }) => {
  return (
    <View style={styles.countryCard}>
    <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <Text style={styles.countryName}>{country.name}</Text>
      <Text>Population: {country.population}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  countryCard: {
    marginBottom: 20,
    alignItems: 'center',
  },
  flag: {
    width: 200,
    height: 120,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CountryCard;
