import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; // Import de Ionicons

const MovieCard = ({ movie }) => (
  <View style={styles.movieCard}>
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
      style={styles.poster}
    />
    <Text style={styles.movieTitle}>{movie.title}</Text>
    <Text>{movie.release_date}</Text>
  </View>
);

const MovieScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '08a341931ab5f5dcee467baeb4a68c76',  // Remplacez par votre clé d'API réelle
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Films Populaires</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text>{item.release_date}</Text>
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
  movieCard: {
    marginBottom: 20,
  },
  poster: {
    width: 300,
    height: 450,
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MovieScreen;
