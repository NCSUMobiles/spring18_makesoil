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
import ManageSoilSite from '../Components/ManageSoilSite';
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
        },
        ManageSoilSite: {
            screen: ManageSoilSite
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

// This one is for embedding in drawer navigators
const AboutUsPage = StackNavigator({
    Main: {
        screen: AboutUsScreen
    }
});

const DrawerStack = DrawerNavigator(
    {
        MySoilSites: {
            screen: AppScreen
        },
        NearSoilSites: {
            screen: SoilSiteStack
        },
        Account: {
            screen: AccountStack
        },
        About: {
            screen: AboutUsPage
        }
    },
    {
        contentComponent: (props => (
            <View style={{flex:1}}>
                <ScrollView>
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />
                        <Text style={{textAlign:'left', marginLeft: 16, marginTop: 8}} onPress={() => {
                            if (auth.currentUser)
                                auth.signOut();
                            props.navigation.navigate('Home');
                        }}>
                            Log Out
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
                <TouchableHighlight style={{padding: 5}} onPress={() => navigation.navigate('DrawerToggle')}>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
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

const AboutUsStack = StackNavigator(
    { AboutUs: { screen: AboutUsScreen } },
    {
        navigationOptions: ({navigation}) => ({
            ...HeaderOptions,
            headerLeft: <HeaderBackButton onPress={() => navigation.navigate('Home')} tintColor="#fff"/>,
        })
    }
);

export default SwitchNavigator(
    {
        Home: HomeScreen,
        AboutUs: AboutUsStack,
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading'
    }
);
