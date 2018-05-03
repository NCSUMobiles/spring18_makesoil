import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

class SiteItem extends Component {

    _navigate(){
        this.props.nav.navigate('SoilSite', { data: this.props.cellData, title: this.props.cellData.name });
    }

    render() {
        return (
            <TouchableHighlight style={styles.highlight} onPress={() => this._navigate()}>
                <View style={styles.container}>
                    <View style={styles.thumbnailContainer}>
                        <Image
                            style={styles.thumbnail}
                            source={{ uri: this.props.cellData.imageURL }}
                        />
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{this.props.cellData.name}</Text>
                        <Text>{this.props.cellData.city}, {this.props.cellData.state}</Text>
                        <Text style={styles.supporter}>Supporters : {this.props.cellData.supporters}</Text>
                    </View>
                    <Text style={styles.distance}>2 mi.</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    highlight: {
        flex: 1,
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
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: 5,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    header: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    headerText: {
        fontSize: 20,
        color: "#232323"
    },
    supporter: {
        marginTop: 5,
        fontSize: 12
    },
    distance:{
        alignSelf: 'flex-end'
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnail: {
        height: 100,
        width: 100
    }
});

export default SiteItem;
