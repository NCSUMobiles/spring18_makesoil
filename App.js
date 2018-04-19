import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './src/header';
import SoilsiteList from './src/SoilsiteList';
import Joey from './src/Joey';
import Abhay from './src/Abhay';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.demo}>
        <Header headerText={'MakeSoil'} />
        <Joey />
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
