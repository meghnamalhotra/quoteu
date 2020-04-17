import React, { Component } from "react";
import { View, Text } from "react-native";

export default class MyProfile extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text>Hello MyProfile</Text>
      </View>
    );
  }
}