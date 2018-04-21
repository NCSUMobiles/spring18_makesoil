import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { auth} from "../config/firebase";
import { Button, Card, CardSection, Input, Spinner } from './common';
import { TabNavigator, TabBarBottom} from 'react-navigation';

class HostingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        textInput: '',
        loading: true,
        userUID: auth.currentUser.uid,
        hostSites: [],
    };
  }

  componentWillMount(){
    this.authSubscription = auth.onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
      if (!user) {
        this.props.navigation.navigate('Auth');
      }
    });

  }


  componentWillUnmount(){
    this.authSubscription();
  }

  render() {
    return(
      <Card>
        <CardSection>
        </CardSection>
      </Card>
    );
  }
}

class SupportingScreen extends React.Component {
  componentWillMount(){
    this.authSubscription = auth.onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
      if (!user) {
        this.props.navigation.navigate('Auth');
      }
    });

  }

  componentWillUnmount(){
    this.authSubscription();
  }

  render() {
    return (
      <Card>
        <CardSection>
        </CardSection>
      </Card>
    );
  }
}



export default TabNavigator(
  {
    Hosting: { screen: HostingScreen },
    Supporting: { screen: SupportingScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({

    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 24,
      },
      style:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent',
        borderTopWidth:1,
        borderTopColor:'#D3D3D3'
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
