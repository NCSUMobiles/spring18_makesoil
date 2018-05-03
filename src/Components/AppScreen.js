import React from 'react';
import { ScrollView, View, ActivityIndicator, StatusBar } from 'react-native';
import { auth } from '../config/firebase';
import { Card, CardSection } from './common';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import SiteItem from './SiteItem';

class SupportingScreen extends React.Component {

    static navigationOptions = {
        title: 'My Soil Sites'
    };

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

    renderSites() {
        if (this.state.sites != null) {
            return this.state.sites.map((site, index) =>
                <SiteItem cellData={site} key={index} nav={this.props.navigation}/>
            );
        } else {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default" />
                </View>
            );
        }
    }

    componentDidMount() {
        // TODO: Implement sites associated with users. Here we're faking it by taking the first two
        fetch('https://us-central1-makesoilvimd.cloudfunctions.net/soilSites')
            .then(response => response.json())
            .then(responseJson => this.setState({ sites: responseJson.splice(0, 2) }));
    }

    render() {
        return (
            <ScrollView>
                {this.renderSites()}
            </ScrollView>
        );
    }
}

class HostingScreen extends React.Component {

    static navigationOptions = {
        title: 'Hosted Sites'
    };

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

    componentDidMount() {
        // TODO: Implement sites associated with users. Here we're faking it by taking the third one
        fetch('https://us-central1-makesoilvimd.cloudfunctions.net/soilSites')
            .then(response => response.json())
            .then(responseJson => this.setState({ sites: responseJson.splice(2, 1) }));
    }

    renderSites() {
        if (this.state.sites != null) {
            return this.state.sites.map((site, index) =>
                <SiteItem cellData={site} key={index} nav={this.props.navigation}/>
            );
        } else {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default" />
                </View>
            );
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderSites()}
            </ScrollView>
        );
    }
}

const styles = {
    loadingContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
};

export default TabNavigator(
    {
        Supporting: { screen: SupportingScreen },
        Hosting: { screen: HostingScreen }
    },
    {
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#909090',
            labelStyle: {
                fontSize: 20,
                paddingBottom: 7,
                fontWeight: 'bold'
            },
            style:{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: '#fff',
                elevation: 5
            }
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true
    }
);
