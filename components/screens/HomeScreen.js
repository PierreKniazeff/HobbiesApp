// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';  // Importez axios
import Config from 'react-native-config';  // Ajout de l'import pour react-native-config


const HomeScreen = ({ navigation, route }) => {
  const avatar = route.params?.avatar;
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all', {
        params: {
          apiKey: Config.API_KEY,
        },
      });
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error.message);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <View style={styles.container}>
      {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <Text style={styles.title}>Bienvenue sur MyHobbies !</Text>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Avatar')}
      >
        <Ionicons name="camera" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Movies')}
      >
        <Ionicons name="film" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Flags')}
      >
        <Ionicons name="flag" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  iconButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
