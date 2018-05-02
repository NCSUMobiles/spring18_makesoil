import React, { Component } from 'react';
import { Image,View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Linking} from 'react-native';
import { Button, Card } from './common';
import { auth } from '../config/firebase';

import backgroundImage from './assets/soil1_2.jpg';
import instagramIcon from './assets/instagram.png';
import facebookIcon from './assets/facebook.png';
import twitterIcon from './assets/twitter.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const IconBox = (props) => (
    <View style={styles.iconBox}>
        {props.children}
    </View>
);

const Icon = ({link, source}) => (
    <TouchableOpacity onPress={ () => Linking.openURL(link) } style={styles.iconContainer}>
        <Image source={source} style={styles.icon} />
    </TouchableOpacity>
);

export default class LandingPage extends Component {

    navigate(page) {
        this.props.navigation.navigate(page);
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.image} blurRadius={7}>
                <Card>
                    <Button
                        label = "Start Making Soil"
                        onPress = { () => auth.currentUser ? this.navigate('App') : this.navigate('Auth') }
                    />
                    <Button
                        label = "About"
                        onPress = { () => this.navigate('AboutUs') }
                    />
                    <IconBox>
                        <Icon source={instagramIcon} link='https://instagram.com/makesoil' />
                        <Icon source={facebookIcon} link='https://facebook.com/makesoil' />
                        <Icon source={twitterIcon} link='https://twitter.com/makesoil' />
                    </IconBox>
                </Card>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    iconBox: {
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'lightgrey'
    },
    iconContainer: {
        margin: 8
    },
    icon: {
        width: 60,
        height: 60
    },
    image: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'space-evenly',
    }
});
