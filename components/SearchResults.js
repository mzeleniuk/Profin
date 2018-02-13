'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text
} from 'react-native';

export default class SearchResults extends Component {
  static navigationOptions = {
    title: 'Results'
  };

  keyExtractor = (item, index) => index;

  renderItem = ({item}) => {
    return (
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <FlatList data={params.listings}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}/>
    );
  };
}
