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

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
  };

  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key])).join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
};

export default class SearchPage extends Component<{}> {
  static navigationOptions = {
    title: 'Profin'
  };

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'London',
      message: '',
      isLoading: false
    };
  };

  onSearchTermChanged = (event) => {
    this.setState({ searchTerm: event.nativeEvent.text });
  };

  executeQuery = (query) => {
    this.setState({ isLoading: true });

    fetch(query)
      .then(response => response.json())
      .then(json => this.handleResponse(json.response))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened: ' + error
        })
      );
  };

  handleResponse = (response) => {
    this.setState({
      isLoading: false,
      message: ''
    });

    if (response.application_response_code.substr(0, 1) === '1') {
      console.log('Properties found: ' + response.listings.length);
    } else {
      this.setState({ message: 'Location not recognized; please try again.'});
    }
  };

  onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchTerm, 1);
    this.executeQuery(query);
  };

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;

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
                     value={this.state.searchTerm}
                     onChange={this.onSearchTermChanged}
                     placeholder='Search via name or postcode'/>
          <Button onPress={this.onSearchPressed} color='#48BBEC' title='Search'/>
        </View>

        <Image source={require('../resources/house.png')} style={styles.image}/>

        {spinner}

        <Text style={styles.description}>
          {this.state.message}
        </Text>
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
