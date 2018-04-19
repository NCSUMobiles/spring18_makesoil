import React from 'react';
import { auth, firestore } from "../config/firebase";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  componentWillMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.navigation.navigate((auth.currentUser ? 'App' : 'Auth'));
  };

  render() {
    return (
      <View>
        <ActivityIndicator/>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
