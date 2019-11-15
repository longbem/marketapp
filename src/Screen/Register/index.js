import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';
import {firebaseApp} from '../../Middle/Api/Firebase/Firebase';
// icon
import IconAn from 'react-native-vector-icons/AntDesign';
// logo
import Logo from '../../Components/Logo/index';
// style
import styles from '../../Asset/Login';

const Register = props => {
  // static navigationOptions = {
  //   header: null,
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Register = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'Alert Title',
          'Đăng ký thành công ' + email,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => props.navigation.navigate('Login'),
            },
          ],
          {cancelable: false},
        );
        this.setState({
          email: '',
          password: '',
        });
      })
      .catch(err => {
        Alert.alert(
          'Alert Title',
          'Đăng ký thất bại!',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      });
  };

  return (
    <ImageBackground
      source={require('../../../Images/anh-nen1.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.boxView}>
        <View style={{marginBottom: 40}}>
          <Logo />
        </View>
        <View>
          <View style={styles.boxInput}>
            <IconAn
              name={'user'}
              size={25}
              color={'#353131'}
              style={{marginTop: 7}}
            />
            <TextInput
              placeholder="User.."
              style={styles.txtInput}
              onChangeText={email => setEmail({email})}
              value={email}
            />
          </View>
          <View style={styles.boxInput}>
            <IconAn
              name={'unlock'}
              size={25}
              color={'#353131'}
              style={{marginTop: 7}}
            />
            <TextInput
              placeholder="Password.."
              style={styles.txtInput}
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              value={password}
            />
          </View>
          {/* <View style={styles.boxInput}>
            <IconAn name={'unlock'} size={25} color={'#D8CFD8'} />
            <TextInput
              placeholder="Confim password.."
              style={styles.txtInput}
              secureTextEntry={true}
              onChangeText={confimpassword => this.setState({confimpassword})}
              value={this.state.confimpassword}
            />
          </View> */}
          <TouchableOpacity
            style={styles.boxTouchableOpacity}
            onPress={Register}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.boxSignUp}>
            <Text style={styles.txtNotAccount}>I have an account? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.textSignUp}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
