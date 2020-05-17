import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Animated,
  ImageBackground,
  Dimensions,
  Image,
  Easing,
  Text,
} from 'react-native';
import IMAGE_DATA from '../src/Assets/ImageData';
const {width, height} = Dimensions.get('window');
export default class AnimateDecay extends Component {
  constructor() {
    super();
    this.state = {
      animation: new Animated.ValueXY({x: 0, y: 0}),
      animateTree: new Animated.ValueXY({x: 0, y: -150}),
      animateMoon: new Animated.ValueXY({x: width / 2 - 75, y: height}),
      animateText: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animate();
  }
  animate() {
    Animated.sequence([
      Animated.decay(this.state.animation, {
        deceleration: 0.99,
        velocity: 3,
        useNativeDriver: true,
      }),
      Animated.spring(this.state.animation, {
        toValue: {x: 0, y: height - 120},
        friction: 20,
        tension: 45,
        useNativeDriver: true,
      }),

      Animated.timing(this.state.animation, {
        toValue: {x: width - 120, y: height - 120},
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.animateTree, {
        toValue: {x: 0, y: height - 170},
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(this.state.animateTree, {
        toValue: {x: 50, y: height - 170},
        friction: 20,
        tension: 45,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.animation, {
        toValue: {x: width - 170, y: height - 120},
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(this.state.animateMoon, {
        toValue: {x: width / 2 - 75, y: 50},
        speed: 10,
        bounciness: 10,
        easing: Easing.bounce(),
        useNativeDriver: true,
      }),
      Animated.timing(this.state.animateMoon, {
        toValue: {x: width / 2 - 180, y: 50},
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.animateText, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }

  render() {
    const animationStyles = {
      transform: [
        {
          translateX: this.state.animation.x,
          translateY: this.state.animation.y,
          rotate: this.state.animation.x.interpolate({
            inputRange: [0, width - 170, width - 120],
            outputRange: ['0deg', '360deg', '360deg'],
          }),
        },
      ],
    };
    const animationStyle1 = {
      transform: [
        {
          translateY: this.state.animateTree.y,
          translateX: this.state.animateTree.x,
        },
      ],
    };

    const animationStyle2 = {
      transform: [
        {
          translateY: this.state.animateMoon.y,
          translateX: this.state.animateMoon.x,
        },
      ],
    };
    const rotateTxt = {
      transform: [
        {
          rotateX: this.state.animateText.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };
    const opacity = this.state.animateText.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1],
    });
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={IMAGE_DATA.starBack} style={styles.imgBack}>
          <Animated.View style={[animationStyles]}>
            {/* <Text>ANIMATION</Text> */}
            <Image
              resizeMode={'cover'}
              style={{height: 100, width: 100, position: 'absolute'}}
              source={IMAGE_DATA.house}
            />
          </Animated.View>
          <Animated.View style={[animationStyle1]}>
            <Image
              resizeMode={'cover'}
              style={{height: 150, width: 150, position: 'absolute'}}
              source={IMAGE_DATA.tree}
            />
          </Animated.View>
          <Animated.View style={[animationStyle2]}>
            <Image
              resizeMode={'cover'}
              style={{height: 150, width: 150, position: 'absolute'}}
              source={IMAGE_DATA.moon}
            />
          </Animated.View>
          <Animated.View
            style={[
              rotateTxt,
              {opacity, position: 'absolute', top: height / 2 - 100},
            ]}>
            <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
              “Take responsibility of your own happiness, never put it in other
              people’s hands.”
            </Text>
          </Animated.View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcbc4',
  },
  objectStyles: {
    width: 100,
    height: 100,
  },
  imgBack: {
    flex: 1,
    resizeMode: 'contain',
  },
});
