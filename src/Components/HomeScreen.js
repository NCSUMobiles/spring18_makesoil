
import React, { Component } from 'react';
import { Text, Image,View, ScrollView, TextInput, Button, StyleSheet, Dimensions, ImageBackground, TouchableHighlight, Linking} from 'react-native';
// import { Header, Card, CardSection, Input, Spinner } from './sr';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LandingPage extends Component {
  
  render(){
    return(
    <View>
    <ImageBackground source={require('./assets/soil1_2.jpg')} style = {styles.image} blurRadius={7}>
    <Text style = {styles.title}>
    Why treat the planet like garbage? {"\n"} Make Soil{"\n"}{"\n"}{"\n"}{"\n"}
    </Text>
    <Button
    title = "Login or Sign Up"
    onPress = { this.AuthenticationPage }
    style = {{flex:1, width: 20, height: 50, backgroundColor: 'blue'}}/>
    <Button
    title = "About"
    onPress = { this.AboutUsPage }
    style = {{flex:1, width: 20, height: 50, backgroundColor: 'blue'}}/>
      <View style={{flex: 1, flexDirection: 'row', alignSelf: "center"}}>
      <TouchableHighlight onPress={()=>{ Linking.openURL('https://instagram.com/makesoil')}}>
        <Image
          source={require('./assets/instagram.png')} style = {styles.icons}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>{ Linking.openURL('https://facebook.com/makesoil')}}>
        <Image
          source={require('./assets/facebook.png')} style = {styles.icons}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>{ Linking.openURL('https://twitter.com/makesoil')}}>
        <Image
          source={require('./assets/twitter.png')} style = {styles.icons}
        />
      </TouchableHighlight>
      </View>
      </ImageBackground>

    </View>
  );
  }

  AuthenticationPage = () =>
  {
     this.props.navigation.navigate('Auth');
  }

  AboutUsPage = () =>
  {
     this.props.navigation.navigate('AboutUs');
  }
}

const styles = StyleSheet.create({
    button: {
      color: 'blue',
      flex: 1,
      width: 20,
      height: 50
    },
    text: {
        flexDirection: 'row',
        height: 20,
        padding: 25,
        backgroundColor: 'lightgreen',
        fontSize: 18
      },
    title: {
        color: 'navajowhite',
        fontSize: 22,
        alignSelf: 'center',
        fontWeight: 'bold',
        width: 300,
        height: 100
      },
    label: {
        color: 'black',
        fontSize: 22,
        alignSelf: 'center'
    },
    icons: {
      width: 60,
      height: 60,
      paddingLeft: 10,
      paddingRight: 25
    },
    image: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'space-evenly',
    }
  });
