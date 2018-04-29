import React, { Component } from 'react';
import { WebView } from 'react-native';
import Widget from '../external/widget/about_us.html'

export default class AboutUsScreen extends React.Component {
    render() {
        return (
          <WebView source={Widget} scalesPageToFit/>
        );
      }
}
