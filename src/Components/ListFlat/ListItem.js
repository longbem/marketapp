import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const Data = [
  {key: 'long'},
  {key: 'thai'},
  {key: 'tung'},
  {key: 'quang'},
  {key: 'lua'},
  {key: 'anh'},
];

class Item extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', padding: 5}}>
        {/*view image*/}
        <View>
          <Image
            style={{
              width: 80,
              height: 80,
              marginRight: 5,
              borderRadius: 50,
              margin: 10,
            }}
            source={{uri: this.props.item.key}}
          />
        </View>
        {/*box title*/}
        <View>
          <Text>{this.props.item.ten_hang}</Text>
          <Text>{this.props.item.mo_ta}</Text>
          <Text>{this.props.item.gia_ban}</Text>
        </View>
      </View>
    );
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      Data: [],
      error: null,
      refreshing: false,
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.Data}
          renderItem={({item, index}) => {
            console.log(`Item = ${item}, index = ${index}`);
            return <Item item={item} index={index} />;
          }}
          keyExtractor={(item, index) => toString()}
        />
      </View>
    );
  }

  componentDidMount(): void {
    fetch('http://longbem.ml/api/Products/api-getall-product.php')
      .then(response => {
          return response.json();
      })
      .then(responseJson => {
        console.log(responseJson)
        this.setState({
          Data: responseJson,
        });

      })
      .catch(e => console.log(e));

  }
}

export default ListItem;
