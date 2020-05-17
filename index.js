/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Prac from './Animation/Practise';
import Ball from './Animation/BallMove';
import Animate from './Animation/Animate';
import AnimateParallel from './Animation/AnimateParallel';
import AnimateDecay from './Animation/AnimateDecay';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Ball);
