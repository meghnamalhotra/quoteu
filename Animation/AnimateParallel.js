import React, {Component} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';

export default class AnimateParallel extends Component {
  constructor() {
    super();
    this.state = {
      opacity: new Animated.Value(0),
      height: new Animated.Value(100),
      width: new Animated.Value(100),
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
      }),
      Animated.timing(this.state.height, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
      }),
      Animated.timing(this.state.width, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
      }),
    ]).start();
  }

  render() {
    const rotation = {
      backgroundColor: '#cc3366',
      opacity: this.state.opacity,
      height: this.state.height,
      width: this.state.width,
      transform: [
        {
          rotate: this.state.width.interpolate({
            inputRange: [100, 200],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.objectStyles, rotation]}>
          <Text>ANIMATION</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcbc4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  objectStyles: {
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
