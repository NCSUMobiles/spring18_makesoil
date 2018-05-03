import React, { Component } from 'react';
import { ActivityIndicator,StatusBar, ScrollView, View } from 'react-native';
import SiteItem from './SiteItem';
import { auth} from '../config/firebase';


class SoilSiteList extends Component {

    static navigationOptions = {
        title: 'Nearby Soil Sites'
    };

    constructor(props) {
        super(props);
        this.state = { sites: null };
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

    componentDidMount() {
        fetch('https://us-central1-makesoilvimd.cloudfunctions.net/soilSites')
            .then(response => response.json())
            .then(responseJson => this.setState({ sites: responseJson }));
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


export default SoilSiteList;
