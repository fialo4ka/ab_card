import React, { Component, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../Theme/Style";
import * as dbHelpers from "../Helpers/dbHelper";


export default class Card extends Component {
 
  constructor(props) {
    super(props);
    dbHelpers.getNewWord().then((value) => {
      this.state = {
        word: value,
      };
      console.log("value = ");
      console.log(value);
    });
  }

  render() {
    console.log("this.props.state = " + this.state.word);
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={[styles.greenContaner, { flex: 2 }]} />
          <View style={[styles.greenContaner, { flex: 2 }]}>
            <Text style={styles.toTranslateText}>{this.state.word} </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={styles.roundPart}
            ></View>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View></View>
        </View>
      </View>
    );

 } 
}
