import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import SiteItem from './SiteItem';

class SoilsiteList extends Component {
  state = { sites: [] };

  componentDidMount() {
    axios.get('https://us-central1-makesoilvimd.cloudfunctions.net/soilSites')
      .then(response => this.setState({ sites: response.data }));
  }

  renderSites() {
    return this.state.sites.map(site =>
      <SiteItem key={site.name} site={site} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderSites()}
      </ScrollView>
    );
  }
}

export default SoilsiteList;
