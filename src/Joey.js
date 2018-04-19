import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import SiteItem from './SiteItem';

class Joey extends Component {
render() {

    return (
      <View style={styles.container}>
        <Text> Joey : This screen should be replaced by your Login/Signup screens.
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Joey;
