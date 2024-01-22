import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/screens/HomeScreen';
import MovieScreen from './components/screens/MovieScreen';
import FlagScreen from './components/screens/FlagScreen';
import AvatarScreen from './components/screens/AvatarScreen';
import CameraScreen from './components/screens/CameraScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
    <Stack.Screen name="Avatar" component={AvatarScreen} options={{ title: 'Avatar' }} />
    {/* Naviguez vers l'écran CameraScreen depuis AvatarScreen */}
    <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Caméra' }} />
  </Stack.Navigator>
);

const App = () => {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        activeColor={colors.primary}
        inactiveColor={colors.text}
        barStyle={{ backgroundColor: colors.background }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
          <Tab.Screen
          name="Avatar"
          component={AvatarScreen}
          options={{
            tabBarLabel: 'Avatar',
            tabBarIcon: ({ color }) => (
              <Ionicons name="camera" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Movies"
          component={MovieScreen}
          options={{
            tabBarLabel: 'Films',
            tabBarIcon: ({ color }) => (
              <Ionicons name="film" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Flags"
          component={FlagScreen}
          options={{
            tabBarLabel: 'Drapeaux',
            tabBarIcon: ({ color }) => (
              <Ionicons name="flag" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
