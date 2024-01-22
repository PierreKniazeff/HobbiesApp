import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const AvatarScreen = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  const takeNewPhoto = () => {
    navigation.navigate('CameraScreen', { setAvatar });
  };

  const saveAvatar = () => {
    navigation.navigate('Home', { avatar });
  };

  return (
    <View style={styles.container}>
      {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <Text style={styles.title}>Choisissez votre Avatar</Text>
      <TouchableOpacity style={styles.iconButton} onPress={pickImage}>
        <Ionicons name="image" size={40} color="white" />
      </TouchableOpacity>
      {/* <Text style={styles.buttonText}>Select existing avatar</Text> */}
      {cameraPermission && (
        <TouchableOpacity style={styles.iconButton} onPress={takeNewPhoto}>
          <Ionicons name="camera" size={40} color="white" />
        </TouchableOpacity>
      )}
      {/* <Text style={styles.buttonText}>Create new avatar</Text> */}
      <TouchableOpacity style={styles.iconButton} onPress={saveAvatar}>
        <Ionicons name="save" size={40} color="white" />
      </TouchableOpacity>
      {/* <Text style={styles.buttonText}>Upload avatar</Text> */}
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
    marginTop: 40, // Ajustez cette valeur pour l'espace souhaité
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
  },
});

export default AvatarScreen;
