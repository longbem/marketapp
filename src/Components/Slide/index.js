import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist/';

class Slide extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination>
          <View style={[styles.child, {backgroundColor: 'tomato'}]}>
            <Image
              source={{
                uri:
                  'https://66.media.tumblr.com/51ded6d87290b93464b846f3ab513568/tumblr_ps7amfd6TP1rogvb0o1_1280.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={[styles.child, {backgroundColor: 'thistle'}]}>
            <Image
              source={{
                uri:
                  'https://66.media.tumblr.com/73384b2930b0fe906fa1fc9ab9e9442c/tumblr_pk0oj0mscR1rogvb0o1_1280.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
            <Image
              source={{
                uri:
                  'https://66.media.tumblr.com/5c4cc88def0a05a51b3c9ff5d7ce5cfe/tumblr_phuoaerOt71rogvb0o1_1280.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={[styles.child, {backgroundColor: 'teal'}]}>
            <Image
              source={{
                uri:
                  'https://66.media.tumblr.com/a14c1200409854ddb35c884330c5b2f3/tumblr_pr62gmE85h1rogvb0o1_1280.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </SwiperFlatList>
      </View>
    );
  }
}

export default Slide;

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: height * 0.25,
    width,
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
});
