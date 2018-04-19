import React from 'react';
import { Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const SiteItem = ({ site }) => {
  const { name, city, imageURL, additionalInfo } = site;

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <TouchableHighlight onPress={() => {
        
        console.log('hi');
      }}>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: imageURL }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
          <Text>{city}</Text>
        </View>
      </CardSection>
      </TouchableHighlight>
    </Card>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  headerTextStyle: {
    fontSize: 20
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default SiteItem;
