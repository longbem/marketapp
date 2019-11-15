import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Content,
  Text,
} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Slide from '../../Components/Slide/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';

// style
import styles from './style';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: 'red',
    },
  });
  renderSlieder() {
    return <Slide />;
  }
  renderNewUp() {
    return (
      <View style={styles.box}>
        <View style={styles.boxTitle}>
          <Text style={styles.Title}>Hàng mới</Text>
        </View>
        <View>
          <Text>hàng mới</Text>
        </View>
      </View>
    );
  }

  renderDanhMuc() {
    return (
      <ScrollView style={{backgroundColor: '#F3F0F0'}}>
        <Text
          style={{
            padding: 10,
            fontSize: 20,
            marginTop: 20,
            fontWeight: 'bold',
            fontFamily: 'Times New Roman',
          }}>
          Danh Mục{' '}
        </Text>
        <Grid>
          <Row>
            <Col style={{padding: 5}}>
              <TouchableOpacity style={{borderRadius: 30}}>
                <ImageBackground
                  source={{
                    uri:
                      'https://66.media.tumblr.com/51ded6d87290b93464b846f3ab513568/tumblr_ps7amfd6TP1rogvb0o1_1280.jpg',
                  }}
                  style={{width: '100%', height: 100}}>
                  <Text>Inside</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col style={{padding: 5}}>
              <Image
                source={{
                  uri:
                    'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                }}
                style={{width: '100%', height: 100}}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{padding: 5}}>
              <TouchableOpacity style={{borderRadius: 30}}>
                <ImageBackground
                  source={{
                    uri:
                      'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                  }}
                  style={{width: '100%', height: 100}}>
                  <Text>Inside</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col style={{padding: 5}}>
              <Image
                source={{
                  uri:
                    'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                }}
                style={{width: '100%', height: 100}}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{padding: 5}}>
              <TouchableOpacity style={{borderRadius: 30}}>
                <ImageBackground
                  source={{
                    uri:
                      'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                  }}
                  style={{width: '100%', height: 100}}>
                  <Text>Inside</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col style={{padding: 5}}>
              <Image
                source={{
                  uri:
                    'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                }}
                style={{width: '100%', height: 100}}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{padding: 5}}>
              <TouchableOpacity style={{borderRadius: 30}}>
                <ImageBackground
                  source={{
                    uri:
                      'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                  }}
                  style={{width: '100%', height: 100}}>
                  <Text>Inside</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col style={{padding: 5}}>
              <Image
                source={{
                  uri:
                    'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                }}
                style={{width: '100%', height: 100}}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{padding: 5}}>
              <TouchableOpacity style={{borderRadius: 30}}>
                <ImageBackground
                  source={{
                    uri:
                      'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                  }}
                  style={{width: '100%', height: 100}}>
                  <Text>Inside</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Col>
            <Col style={{padding: 5}}>
              <Image
                source={{
                  uri:
                    'http://admin.thethaohcm.vn/js/tiny_mce/plugins/imagemanager/files/thoi-tiet-hom-nay-28-1.jpg',
                }}
                style={{width: '100%', height: 100}}
              />
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    );
  }

  render() {
    return (
      <Container>
        {/*header*/}
        <ImageBackground
          source={require('../../../Images/backgroundButton.jpg')}>
          <Header style={{height: 68, paddingTop: 20}}>
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
              hidden={false}
              translucent={true}
            />
            <Left>
              <Button transparent>
                <IconIon
                  name="md-reorder"
                  size={40}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right>
              <Button transparent>
                <IconIon name="ios-search" size={30} />
              </Button>
              <Button transparent>
                <Icon name="heart-o" size={20} />
              </Button>
              <Button transparent>
                <IconEntypo name="dots-three-vertical" size={20} />
              </Button>
            </Right>
          </Header>
        </ImageBackground>
        <Content>
          <View>{this.renderSlieder()}</View>
          <View>{this.renderNewUp()}</View>
          <View>{this.renderDanhMuc()}</View>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
