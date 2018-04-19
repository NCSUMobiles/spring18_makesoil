import { auth, database, provider } from "./config/firebase";
import React, { Component} from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, CardSection, Header, Button, Spinner, Input } from './Components/common';
import AppNavigation from './Navigation/AppNavigation';
import { StackNavigator, SwitchNavigator } from 'react-navigation';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppNavigation/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
