import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableHighlight, Image} from 'react-native';
import { auth} from '../config/firebase';
import AuthLoadingScreen from '../Components/AuthLoadingScreen';
import HomeScreen from '../Components/HomeScreen';
import AboutUsScreen from '../Components/AboutUsScreen';
import AuthScreen from '../Components/AuthScreen';
import AppScreen from '../Components/AppScreen';
import AccountScreen from '../Components/AccountScreen';
import SoilSiteRequestJoinScreen from '../Components/SoilSiteRequestJoinScreen';
import SoilSiteList from '../Components/SoilSiteList';
import { StackNavigator, SwitchNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { HeaderBackButton } from 'react-navigation';
import hamburgerIcon from '../Icons/hamburger.png';

var HeaderOptions = {
    title: 'MAKE:SOIL',
    headerStyle: { backgroundColor: '#212529' },
    headerTintColor: '#28a745',
    headerTitleStyle: { fontWeight: 'bold' }
};

const SoilSiteStack = StackNavigator(
    {
        SoilSites: {
            screen: SoilSiteList
        },
        SoilSite: {
            screen: SoilSiteRequestJoinScreen
        }
    }
);

const AccountStack = StackNavigator(
    {
        Account: {
            screen: AccountScreen
        }
    }
);

const DrawerStack = DrawerNavigator(
    {
        NearSoilSites: {
            screen: SoilSiteStack
        },
        MySoilSites: {
            screen: AppScreen
        },
        Account: {
            screen: AccountStack
        },
    },

    {
        contentComponent: (props => (
            <View style={{flex:1}}>
                <ScrollView>
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />
                        <Text style={{textAlign:'left'}} onPress={() => auth.signOut()}>
                            LOGOUT
                        </Text>
                    </SafeAreaView>
                </ScrollView>
            </View>
        )),
        drawerPosition: 'right',
    }
);


const AppStack = StackNavigator(
    {
        DrawerStack: {screen: DrawerStack},
    },
    {
        navigationOptions: ({navigation}) => ({
            ...HeaderOptions,
            headerRight: (
                <TouchableHighlight onPress={() => navigation.navigate('DrawerToggle')}>
                    <Image
                        style={{
                            width: 51,
                            height: 51,
                            resizeMode: Image.resizeMode.contain,
                        }}
                        source={hamburgerIcon}
                    />
                </TouchableHighlight>
            ),
        })
    }
);

const AuthStack = StackNavigator(
    { Login: AuthScreen },
    {
        navigationOptions: ({navigation}) => ({
            ...HeaderOptions,
            headerLeft: <HeaderBackButton onPress={() => navigation.navigate('Home')} tintColor="#fff"/>,
        })
    }
);

const HomeStack = StackNavigator(
    {
        HomeScreen: { screen: HomeScreen }
    }
);

const AboutUsStack = StackNavigator(
    { AboutUsScreen: { screen: AboutUsScreen } },
    {
        navigationOptions: ({navigation}) => ({
            ...HeaderOptions,
            headerLeft: <HeaderBackButton onPress={() => navigation.navigate('Home')} tintColor="#fff"/>,
        })
    }
);


export default SwitchNavigator(
    {
        Home: HomeStack,
        AboutUs: AboutUsStack,
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
