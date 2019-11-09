import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <View>
      <Image
        style={styles.boxImages}
        source={require('../../../Images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxImages: {
    width: 300,
    height: 100,
  },
});

export default Logo;
