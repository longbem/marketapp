import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import ListItem from '../../Components/ListFlat/ListItem';

class Products extends React.Component{
  render(){
    return(
       <View>
         <StatusBar backgroundColor='#2B99BF' barStyle='light-content' />
         <View>
           <Text>Products</Text>
         </View>
       </View>
    );
  }
}

export default Products;
