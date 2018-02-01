'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image
} from 'react-native';

export default class SearchPage extends Component<{}> {
  static navigationOptions = {
    title: 'Profin'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy
        </Text>

        <Text style={styles.description}>
          Search by place-name or postcode
        </Text>

        <View style={styles.flowRight}>
          <TextInput underlineColorAndroid={'transparent'}
                     style={styles.searchInput}
                     placeholder='Search via name or postcode'/>
          <Button onPress={() => {}} color='#48BBEC' title='Search'/>
        </View>

        <Image source={require('../resources/house.png')} style={styles.image}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 2,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138,
    marginTop: 20
  }
});
