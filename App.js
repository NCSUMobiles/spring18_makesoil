import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/header';
import SoilsiteList from './src/SoilsiteList';
import AppNavigation from './src/Navigation/AppNavigation';
import Joey from './src/Joey';
import Abhay from './src/Abhay';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
