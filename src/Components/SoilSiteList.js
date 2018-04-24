import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
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
    return this.state.sites.map((site) =>

        <SiteItem cellData={site}>
        </SiteItem>

    );
  } else{
    console.log('Empty render');
    return (
      <Text>
        Loading
      </Text>
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

export default SoilSiteList;
