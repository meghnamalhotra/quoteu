import React, {Component} from 'react';
import {View, StyleSheet, PanResponder, Animated} from 'react-native';
// create a component
class Ball extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: () => {
        position.flattenOffset();
      },
    });
    this.state = {panResponder, position};
    console.log('panResponder', panResponder.panHandlers);
  }

  render() {
    let handles = this.state.panResponder.panHandlers;
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.ball, this.state.position.getLayout()]}
          {...handles}
        />
      </View>
    );
  }
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ball: {
    height: 80,
    width: 80,
    borderColor: 'black',
    borderRadius: 40,
    borderWidth: 40,
  },
});
//make this component available to the app
export default Ball;
