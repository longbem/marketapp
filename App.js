/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from './src/Nav/Navigator';

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
