import React, { Component } from "react";
import { View, Text } from "react-native";
import {inject, observer} from "mobx-react"
@inject('LoginStore')
@observer
export default class SignIn extends Component {
  
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
        <Text onPress={()=>{this.props.LoginStore.tokenFunction('jkasjdkajkdjkaj')}}>SignIn</Text>
      </View>
    );
  }
}