import React, { Component } from 'react';
import { ActivityIndicator,StatusBar, ScrollView, View } from 'react-native';
import axios from 'axios';
import SiteItem from './SiteItem';
import { auth} from '../config/firebase';


class SoilSiteList extends Component {
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
        axios.get('https://us-central1-makesoilvimd.cloudfunctions.net/soilSites')
            .then(response => this.setState({ sites: response.data }));
    }

    renderSites() {
        if (this.state.sites != null) {
            return this.state.sites.map((site, i) =>
                <SiteItem cellData={site} key={i} id={i} nav={this.props.navigation}/>
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
