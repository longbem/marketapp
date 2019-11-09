import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import TinMoi from './TinMoi/TinMoiScreen';
import TinTuc from './TinTuc/TinTucScreen';

const MaterTop = createMaterialTopTabNavigator({
  TinMoi: TinMoi,
  TinTuc: TinTuc,
});

const TabTop = createAppContainer(MaterTop);

export default class Notification extends Component {
  render() {
    return <TabTop />;
  }
}
