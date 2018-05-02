import React from 'react';
import { auth } from '../config/firebase';
import { Card, CardSection } from './common';
import { TabNavigator, TabBarBottom } from 'react-navigation';

class HostingScreen extends React.Component {

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
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#f7fcf8',
            labelStyle: {
                fontSize: 20,
                paddingBottom: 7,
                fontWeight: 'bold'
            },
            style:{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: '#b0b0b0'
            }
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: false,
    }
);
