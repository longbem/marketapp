import React from 'react';
// import {} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../Screen/Home/index';
import Login from '../Screen/Login/index';
import Register from '../Screen/Register/index';
import Notification from '../Screen/Notification/index';
import Products from '../Screen/Products/index';
import User from '../Screen/User/index';
import DrawerScreen from '../Screen/Drawave/index';

import Icon from 'react-native-vector-icons/Ionicons';

// BottomNavigator
const TabsBottom = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        headerStyle: {
          backgroundColor: 'red',
        },
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-home" color={tintColor} size={20} />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-notifications-outline" color={tintColor} size={25} />
        ),
      },
    },
    Products: {
      screen: Products,
      navigationOptions: {
        tabBarLabel: 'Sản phẩm',
        headerStyle: {
          backgroundColor: 'red',
        },
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-cube" color={tintColor} size={20} />
        ),
      },
    },
    User: {
      screen: User,
      navigationOptions: {
        tabBarLabel: 'Tôi Bán',
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" color={tintColor} size={15} />
        ),
      },
    },
  },
  // {
  //   tabBarOptions: {
  //     // headerMode: null,
  //     style: {
  //       backgroundColor: '#DCDFC8',
  //     },
  //     inactiveTintColor: '#82A2C1',
  //     activeTintColor: '#D74B49',
  //   },
  // },
);

// Navigator Drawer
const TabDrawer = createDrawerNavigator(
  {
    Tabs: {
      screen: TabsBottom,
    },
  },
  {
    contentComponent: props => <DrawerScreen {...props} />,
  },
);

// Navigator Stack login & register
const StackNavigator = createStackNavigator(
  {
    TabDrawer: TabDrawer,
    Login: Login,
    SignUp: Register,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppNav = createAppContainer(StackNavigator);

export default AppNav;
