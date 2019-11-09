import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Title,
  Body,
  Content,
} from 'native-base';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

class Drawave extends Component {
  render() {
    return (
      <View>
        <View style={styles.boxTop}>
          <View style={{marginTop: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#DDD5E2',
                width: 110,
                padding: 5,
                paddingRight: 10,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginRight: 10,
                    fontWeight: 'bold',
                    color: '#D72A1D',
                  }}>
                  Bắt đầu bán
                </Text>
                <Icon name="ios-arrow-forward" size={20} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View>
              <Avatar
                size="medium"
                rounded
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
                showEditButton
              />
            </View>
            <View style={{padding: 5, marginLeft: 10}}>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Long</Text>
              </View>
              <View>
                <Text>Người theo dõi: | Đang theo dõi: </Text>
              </View>
            </View>
          </View>
        </View>
        {/*conten*/}
        <View style={{margin: 5, backgroundColor: '#F9FAF8'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 5,
              borderBottomColor: '#C1C2D6',
              borderBottomWidth: 1,
            }}>
            <Icon
              name="md-heart-empty"
              size={30}
              color="#EF5E64"
              style={{padding: 5}}
            />
            <Text style={{padding: 5, fontSize: 20}}>Đã thích</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 5,
              borderBottomColor: '#C1C2D6',
              borderBottomWidth: 1,
            }}>
            <Icon
              name="md-time"
              size={30}
              color="#6658D6"
              style={{padding: 5}}
            />
            <Text style={{padding: 5, fontSize: 20}}>Đã xem</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 5,
              borderBottomColor: '#C1C2D6',
              borderBottomWidth: 1,
            }}>
            <IconAntDesign
              name="phone"
              size={30}
              color="#2FD628"
              style={{padding: 5}}
            />
            <Text style={{padding: 5, fontSize: 20}}>Trợ giúp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 5,
              borderBottomColor: '#C1C2D6',
              borderBottomWidth: 1,
            }}>
            <IconAntDesign
              name="setting"
              size={30}
              color="#171717"
              style={{padding: 5}}
            />
            <Text style={{padding: 5, fontSize: 20}}>Cài đặt</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 10, backgroundColor: '#F9FAF8'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 5,
            }}>
            <IconEntypo
              name="log-out"
              size={30}
              color="#FA2936"
              style={{padding: 5}}
            />
            <Text style={{padding: 5, fontSize: 20}}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Drawave;

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  boxTop: {
    backgroundColor: '#2B99BF',
  },
});
