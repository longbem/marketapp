import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from 'react-native';
import Logo from '../../Components/Logo/index';

import styles from '../../Asset/styles';

class Index extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.boxView}>
        <View>
          <Logo />
        </View>
        <View>
          <TextInput style={styles.boxInput} placeholder={'Username...'} />
          <TextInput
            style={styles.boxInput}
            placeholder={'RetypePassword...'}
          />
          <TextInput
            style={styles.boxInput}
            placeholder={'RetypePassword...'}
          />
          <TouchableOpacity
            style={styles.boxTouchableOpacity}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.boxLogin}>
            <Text style={styles.color}>I have an account? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
