import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import { styles } from "../ab_card/src/Theme/style";

export default function App() {
  return (
    <View style={styles.h1}>
      {console.log(styles.h1)}
      <Text style={styles.h1}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}