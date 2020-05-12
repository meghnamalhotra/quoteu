import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Animated,
  Easing,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class Animate extends Component {
  constructor() {
    super();
    this.state = {
      anime: false,
      animation: new Animated.ValueXY({x: 0, y: height - 100}),
    };
  }

  componentDidMount() {
    const animateBox = setInterval(() => {
      Animated.sequence([
        Animated.spring(this.state.animation, {
          toValue: {x: width - 100, y: 0},
          easing: Easing.bounce(),
          useNativeDriver: true,
        }),
        Animated.spring(this.state.animation, {
          toValue: {x: 0, y: height - 100},
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);
  }

  render() {
    const animationStyles = {
      transform: [
        {
          translateX: this.state.animation.x,
          translateY: this.state.animation.y,
          rotate: this.state.animation.y.interpolate({
            inputRange: [0, height - 100],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };
    const animationStyle1 = {
      transform: [
        {
          translateY: this.state.animation.y,
          rotate: this.state.animation.y.interpolate({
            inputRange: [0, height - 100],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };
    const animationStyle2 = {
      transform: [
        {
          translateX: this.state.animation.x,
          rotate: this.state.animation.x.interpolate({
            inputRange: [0, width - 100],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.objectStyles,
            animationStyles,
            {backgroundColor: '#cc3366'},
          ]}>
          <Text>ANIMATION</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.objectStyles,
            animationStyle1,
            {position: 'absolute', backgroundColor: '#ff6699'},
          ]}>
          <Text>ANIMATION</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.objectStyles,
            animationStyle2,
            {
              position: 'absolute',
              top: height - 100,
              backgroundColor: '#Fc4c4e',
            },
          ]}>
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
  },
  objectStyles: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16,
    elevation: 24,
  },
});
