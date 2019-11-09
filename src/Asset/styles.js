import {height, width} from '../Screen/Home';
import {Dimensions} from 'react-native';

const React = require('react-native');

const {StyleSheet} = React;

// backgroundColor #64bf64 Splash 4988E6

export default {
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
  boxTouchableOpacity: {
    padding: 10,
    //backgroundColor: '#589566',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#BACBC8',
    marginBottom: 10,
  },
  boxTouchableOpacityFB: {
    padding: 10,
    backgroundColor: '#234895',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#BACBC8',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  Register: {
    marginTop: 60,
    color: '#95CCFF',
  },
  boxSignUp: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  textSignUp: {
    color: '#fff',
    marginLeft: 15,
  },
  color: {
    fontWeight: 'bold',
    color: '#3A403D',
  },

  // SignUp
  boxInput: {
    width: 250,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#BACBC4',
    marginBottom: 20,
  },
  boxLogin: {
    flexDirection: 'row',
    marginTop: 30,
  },
  textLogin: {
    color: '#fff',
    marginLeft: 15,
  },
};
