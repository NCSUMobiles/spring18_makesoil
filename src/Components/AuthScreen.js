import React from 'react';
import { TextInput, Text, Image,  View, Dimensions } from 'react-native';
import { auth } from '../config/firebase';
import { Card, Button} from './common';
import { TabNavigator, TabBarBottom} from 'react-navigation';
import background from '../Background/authBackground.jpg';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        if (email && password){
            auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
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
            <View style={styles.containerStyle}>
                <View style={styles.backgroundStyle}>
                    <Image
                        style={{
                            flex: 1,
                            resizeMode: 'cover',
                        }}
                        source={background}
                    />
                </View>
                <Card style={styles.loginContainerStyle} behavior="padding">
                    <TextInput
                        placeholder="email"
                        label='Email: '
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        style={styles.loginBoxInputStyle}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        autoCapitalize="none"
                        style={styles.loginBoxInputStyle}
                    />
                    <View style={{backgroundColor:'white'}}>
                        <Text style={styles.errorTextStyle}>
                            {this.state.error}
                        </Text>
                    </View>
                    <Button onPress={this.onButtonPress.bind(this)} label="LOGIN"/>
                </Card>
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
            auth.createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        } else {
            this.onPasswordMisMatch();
        }
    }

    checkPasswordMatch(){
        return this.state.password === this.state.confirmPassword;
    }

    onPasswordMisMatch(){
        this.setState({ error: 'Password doesn\'t match', loading: false });
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
            <View style={styles.containerStyle}>
                <View style={styles.backgroundStyle}>
                    <Image
                        style={{
                            flex: 1,
                            resizeMode: 'cover',
                        }}
                        source={background}
                    />
                </View>
                <Card>
                    <TextInput
                        placeholder="email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        style={styles.loginBoxInputStyle}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        autoCapitalize="none"
                        style={styles.loginBoxInputStyle}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="confirm password"
                        value={this.state.confirmPassword}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        autoCapitalize="none"
                        style={styles.loginBoxInputStyle}
                    />
                    <View style={{backgroundColor:'white'}}>
                        <Text style={styles.errorTextStyle}>
                            {this.state.error}
                        </Text>
                    </View>
                    <Button onPress={this.onButtonPress.bind(this)} label="SIGNUP"/>
                </Card>
            </View>
        );
    }
}


const window = Dimensions.get('window');
const styles = {
    containerStyle: {
        backgroundColor: 'transparent',
        flex:1,
        justifyContent:'center'
    },
    backgroundStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.7,
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#ff6666'
    },
    loginBoxInputStyle: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        width: window.width - 30,
    },
};

export default TabNavigator(
    {
        Login: { screen: LoginScreen },
        Signup: { screen: SignupScreen }
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 24,
            },
            style:{
                justifyContent:'center',
                alignItems:'center',
            }
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: false,
    }
);
