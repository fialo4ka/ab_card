import React, { useEffect, useState, Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./src/Theme/Style";
import * as dbHelpers from "./src/Helpers/dbHelper"

export default function App() {
    const [dataLoading, finishLoading] = useState(true);
    const [word, setData] = useState([]);
    
    const dataHandler = () => {
          finishLoading(true);
          dbHelpers.getNewWord().then((value) => {
            setData(value);
            console.log(value);
            finishLoading(false);
          });
        };
    
    useEffect(() => {
        dataHandler();
      }, []); 
  return (
    <View style={styles.v1}>
      {dataLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.h1}>{word.word}</Text>
      )}
    </View>
  );
}