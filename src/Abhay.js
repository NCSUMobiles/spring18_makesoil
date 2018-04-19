import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import SiteItem from './SiteItem';

class Abhay extends Component {
render() {

    return (
      <View style={styles.container}>
        <Text> Abhay : This page will display details of the soil site clicked on.
        The id of the soil site is passed and this screen should run an API request through axios
        to get the details
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  demo:{
    flex: 1
  },
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Abhay;
