import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import RootNavigation from './navigation';

export default function App() {
  return   <RootNavigation />;
}
