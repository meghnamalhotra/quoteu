import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Feed extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          Feed navigationnavigate
        </Text>
      </View>
    );
  }
}
