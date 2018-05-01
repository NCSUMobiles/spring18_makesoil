import React from 'react';
import { auth } from '../config/firebase';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
    componentWillMount() {
        this._bootstrap();
    }

    _bootstrap() {
        this.props.navigation.navigate((auth.currentUser ? 'App' : 'Home'));
    }

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle='default' />
            </View>
        );
    }
}
