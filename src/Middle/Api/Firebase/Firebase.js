import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBKBebMCUEQSrAFZHZEvhbTvr6QKTyHQFA',
  authDomain: 'market-d8823.firebaseapp.com',
  databaseURL: 'https://market-d8823.firebaseio.com',
  projectId: 'market-d8823',
  storageBucket: 'market-d8823.appspot.com',
  messagingSenderId: '914884831973',
  appId: '1:914884831973:web:9db9496a12550d31d2c20c',
  measurementId: 'G-D6WC73NSJM',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
