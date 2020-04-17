import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ForgotPassword extends Component {
  
  render() {
    const {navigation} = this.props
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <Text onPress={()=>{navigation.navigate('Profile')}}>ForgotPassword</Text>
      </View>
    );
  }
}