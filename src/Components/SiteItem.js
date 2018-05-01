import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

class SiteItem extends Component {

    _navigate(){
        this.props.nav.navigate('SoilSite', { data: this.props.cellData, title: this.props.cellData.name });
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => this._navigate()}>
                <View style={styles.containerStyle}>
                    <View style={styles.container1Style}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{ uri: this.props.cellData.imageURL }}
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.headerTextStyle}>{this.props.cellData.name}</Text>
                            <Text>{this.props.cellData.city}, {this.props.cellData.state}</Text>
                            <Text style={styles.supporterStyle}>Supporters : {this.props.cellData.supporters}</Text>
                            <Text style={styles.distanceStyle}>2 mi.</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    container1Style: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: '#5cad14',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    distanceStyle:{
        alignSelf: 'flex-end'
    },
    supporterStyle: {
        marginTop: 5,
        fontSize: 12
    },
    headerContentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
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
    },
    demo:{
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SiteItem;
