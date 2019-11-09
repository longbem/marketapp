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

import Logo from '../../Components/Logo';

class App extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(prop) {
    super(prop);

    const context = this;
    setTimeout(() => {
      context.props.navigation.replace('Login');
      console.log('navigation', context.props);
    }, 1000);
  }

  render() {
    return (
        <View style={styles.boxView}>
          <StatusBar backgroundColor='#2B99BF' barStyle='light-content' />
          <Logo />
          <Text style={styles.boxText}>Market Sinh Viên</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  boxView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B99BF',
  },
  boxText: {
    color: '#B29A34',
    fontSize: 20,
  },
  boxImage: {
    width: 150,
    height: 100,
  },
});

export default App;
