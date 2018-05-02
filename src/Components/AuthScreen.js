import React from 'react';
import { View } from 'react-native';
import { auth } from '../config/firebase';
import { Button, Input, Form, ErrorText } from './common';
import { TabNavigator, TabBarBottom } from 'react-navigation';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        if (email && password){
            return auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        } else {
            this.onLoginFail();
        }
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View>
                <Form>
                    <Input
                        label='Email:'
                        value={this.state.email}
                        onChange={email => this.setState({ email })}
                        type='email-address'
                    />
                    <Input
                        label='Password:'
                        value={this.state.password}
                        secure={true}
                        onChange={password => this.setState({ password })}
                    />
                    <ErrorText text={this.state.error}/>
                    <Button onPress={this.onButtonPress.bind(this)} label="Login"/>
                </Form>
            </View>
        );
    }
}

class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', confirmPassword:'', error: '', loading: false };
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        if (email && password && this.checkPasswordMatch()){
            return auth.createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        } else {
            this.onPasswordMismatch();
        }
    }

    checkPasswordMatch(){
        return this.state.password === this.state.confirmPassword;
    }

    onPasswordMismatch(){
        this.setState({ error: 'Password doesn\'t match', loading: false });
    }
    onLoginFail() {
        this.setState({ error: 'Failed to create user.', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <Form>
                <Input
                    label='Email:'
                    value={this.state.email}
                    onChange={email => this.setState({ email })}
                    type='email-address'
                />
                <Input
                    label='Password:'
                    value={this.state.password}
                    secure={true}
                    onChange={password => this.setState({ password })}
                />

                <Input
                    label='Confirm password:'
                    value={this.state.confirmPassword}
                    secure={true}
                    onChange={confirmPassword => this.setState({ confirmPassword })}
                />

                <ErrorText text={this.state.error}/>
                <Button onPress={this.onButtonPress.bind(this)} label="Signup"/>
            </Form>
        );
    }
}

export default TabNavigator(
    {
        Login: { screen: LoginScreen },
        Signup: { screen: SignupScreen }
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
        animationEnabled: true,
        swipeEnabled: true,
    }
);
