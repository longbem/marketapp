import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  boxView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2B99BF',
  },
  boxInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#BACBC8',
    marginBottom: 15,
  },
  txtInput: {
    fontSize: 17,
    width: 250,
    marginLeft: 10,
  },
  checkbox: {
    borderRadius: 30,
    marginRight: 20,
    borderColor: '#3A403D',
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
  boxSignUp: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  textSignUp: {
    color: '#2368B9',
    marginLeft: 15,
  },
  text: {
    color: '#353131',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  error: {
    color: '#D63535',
    alignSelf: 'center',
    marginBottom: 10,
  },
  txtNotAccount: {
    color: '#627387',
  },
  colorWhite: {
    color: '#fff',
  },
});

export default styles;
