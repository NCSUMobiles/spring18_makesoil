import React, { Component } from 'react';
import { Text, Image,View, Button, StyleSheet, Dimensions, ImageBackground, TouchableHighlight, Linking} from 'react-native';

import backgroundImage from './assets/soil1_2.jpg';
import instagramIcon from './assets/instagram.png';
import facebookIcon from './assets/facebook.png';
import twitterIcon from './assets/twitter.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LandingPage extends Component {

    navigate(page) {
        this.props.navigation.navigate(page);
    }

    render() {
        return (
            <View>
                <ImageBackground source={backgroundImage} style = {styles.image} blurRadius={7}>
                    <Text style = {styles.title}>
          Why treat the planet like garbage? {'\n'} Make Soil{'\n'}{'\n'}{'\n'}{'\n'}
                    </Text>
                    <Button
                        title = "Login or Sign Up"
                        onPress = { () => this.navigate('Auth') }
                        style = {{flex:1, width: 20, height: 50, backgroundColor: 'blue'}}/>
                    <Button
                        title = "About"
                        onPress = { () => this.navigate('AboutUs') }
                        style = {{flex:1, width: 20, height: 50, backgroundColor: 'blue'}}/>
                    <View style={{flex:1, flexDirection: 'row', alignSelf: 'center'}}>
                        <TouchableHighlight onPress={ () => { Linking.openURL('https://instagram.com/makesoil');}}>
                            <Image
                                source={instagramIcon} style = {styles.icons}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { Linking.openURL('https://facebook.com/makesoil');}}>
                            <Image
                                source={facebookIcon} style = {styles.icons}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { Linking.openURL('https://twitter.com/makesoil');}}>
                            <Image
                                source={twitterIcon} style = {styles.icons}
                            />
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
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
