import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import { styles } from "./src/Theme/Style";
import * as dbHelpers from "./src/Helpers/dbHelper"

export default function App() {
  {
    dbHelpers.openDatabase().then((data) => {
      console.log(data);
      return data;
    });
  }
  
  return (
    <View style={styles.v1}>
      <Text style={styles.h1}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}