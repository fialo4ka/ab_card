import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, TouchableOpacity } from "react-native";
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
    <View style={styles.container}>
      {dataLoading && word != null ? (
        <ActivityIndicator />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={styles.greenContaner} />
            <View style={styles.greenContaner}>
              <Text style={styles.toTranslateText}>{word.word} </Text>
            </View>
            <View style={[styles.greenContaner, { flex: 1 }]}>
              <View style={styles.roundPart}>
                <Text style={{ width: "33%" }}></Text>
                <View style={{ width: "33%" }}>
                  <View style={styles.midlPoint}> 
                  </View>
                </View>
                <Text style={styles.level}>{word.level} </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <View style={{ flex: 9 }}></View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.okButton}
                //onPress={ () => dataHandler("3")}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                //onPress={ () => dataHandler("3")}
              ></TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}