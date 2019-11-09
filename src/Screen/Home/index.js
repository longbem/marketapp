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

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'red',
    },
  })

  render() {
    return (
        <Container style={{backgroundColor: '#2B99BF'}}>
          {/*header*/}
          <Header style={{backgroundColor: '#2B99BF'}}>
            <StatusBar backgroundColor='#2B99BF' barStyle='light-content' />
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
          <Content>
            <ScrollView style={{backgroundColor: '#E5E7E7'}}>
              <Slide />
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
          </Content>
        </Container>
    );
  }
}

export default HomeScreen;
