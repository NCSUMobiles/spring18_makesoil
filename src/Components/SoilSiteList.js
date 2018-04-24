import React, { Component } from 'react';
import { ActivityIndicator,StatusBar, ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import SiteItem from './SiteItem';


class SoilSiteList extends Component {
  state = { sites: null };


  componentDidMount() {
    axios.get('https://us-central1-makesoilvimd.cloudfunctions.net/soilSites')
      .then(response => this.setState({ sites: response.data }));
  }

  renderSites() {
    if(this.state.sites != null){/*
      console.log('Real render');
      console.log(this.state.sites);
      return (
        <Text>
          Loading
        </Text>
      );
*/
    return this.state.sites.map((site, i) =>

        <SiteItem cellData={site} key={i} id={i} nav={this.props.navigation}/>

    );
  } else{
    console.log('Empty render');
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
