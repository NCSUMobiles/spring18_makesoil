import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import AppNavigation from './Navigation/AppNavigation';

export default class App extends Component {

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
        backgroundColor: '#fff'
    },
});
