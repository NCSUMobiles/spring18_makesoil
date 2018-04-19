import React, { Component} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableHighlight, Image} from 'react-native';
import { auth} from "../config/firebase";
import AuthLoadingScreen from '../Components/AuthLoadingScreen';
import AuthScreen from '../Components/AuthScreen';
import AppScreen from '../Components/AppScreen';
import AppNavigation from '../Navigation/AppNavigation';
import { StackNavigator, SwitchNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

const DrawerStack = DrawerNavigator(
  {
    Home: {
      screen: AppScreen
    },

  },
  {
    contentComponent: ((props) => (
        <View style={{flex:1}}>
          <ScrollView>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
                <Text style={{textAlign:'left'}} onPress={ async () => {auth.signOut()}}>
                  LOGOUT
                </Text>
            </SafeAreaView>
          </ScrollView>
        </View>
    )),
    drawerPosition: 'right',
  }
);


const AppStack = StackNavigator(
  {
    DrawerStack: {screen: DrawerStack},
  },
  {
    navigationOptions: ({navigation}) => ({
      title: 'MAKE:SOIL',
      headerStyle: { backgroundColor: '#212529' },
      headerTintColor: '#28a745',
      headerTitleStyle: { fontWeight: 'bold' },
      headerRight: (
        <TouchableHighlight onPress={() => navigation.navigate('DrawerToggle')}>
          <Image
            style={{
              width: 51,
              height: 51,
              resizeMode: Image.resizeMode.contain,
            }}
            source={require('../Icons/hamburger.png')}
          />
        </TouchableHighlight>
      ),
    })
  }
);
const AuthStack = StackNavigator(
  { Login: AuthScreen },
  {
    navigationOptions: ({navigation}) => ({
      title: 'MAKE:SOIL',
      headerStyle: { backgroundColor: '#212529' },
      headerTintColor: '#28a745',
      headerTitleStyle: { fontWeight: 'bold' },
    })
  }
);

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
