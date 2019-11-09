import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
    StatusBar,
} from 'react-native';
import {ListItem, Body, CheckBox} from 'native-base';
import Logo from '../../Components/Logo/index';
// icon
import IconAn from 'react-native-vector-icons/AntDesign';

// style
import styles from '../../Asset/styles';

export default class Index extends Component {


  constructor(prop) {
    super(prop);
    console.log('afa', this.props.navigation);
  }
  render() {
    return (

        <KeyboardAvoidingView style={styles.boxView}>
          <StatusBar backgroundColor='#2B99BF' barStyle='light-content' />
          <View>
            <View style={{marginBottom: 20}}>
              <Logo />
            </View>
            <View>
              <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 1, borderBottomColor: '#BACBC8', marginBottom: 15}}>
                <IconAn name={'user'} size={25} color={'#D8CFD8'} style={{marginTop: 5}}/>
                <TextInput placeholder="User.." />
              </View>
              <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 1, borderBottomColor: '#BACBC8'}}>
                <IconAn name={'unlock'} size={25} color={'#D8CFD8'} style={{marginTop: 5}} />
                <TextInput placeholder="Password.." />
              </View>
              <ListItem style={{borderBottomWidth: 0}}>
                <CheckBox checked={false} color="green" style={{borderRadius: 30, marginRight: 20, borderColor: '#3A403D'}}/>
                <Body>
                  <Text style={{color: '#3A403D'}}>Nhớ mật khẩu!</Text>
                </Body>
              </ListItem>
              <TouchableOpacity
                  style={styles.boxTouchableOpacity}
                  onPress={() => this.props.navigation.navigate('Home')}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <IconAn name={'login'} size={20} color={'#ffffff'}/>
                  <Text style={styles.text}>Login</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.boxTouchableOpacityFB}
                  onPress={() => this.props.navigation.navigate('Home')}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <IconAn name={'facebook-square'} size={20} color={'#ffffff'} />
                  <Text style={{ fontSize: 15, marginLeft: 5, color: '#ffffff'}}>Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.boxSignUp}>
                <Text style={styles.color}>Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.textSignUp}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>

    );
  }
}

// https://github.com/longbem/DownloadTruyen.git
