import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { Button } from './common';


const KeyValue = ({label, value}) => (
    <View style={styles.keyValue}>
        <Text style={styles.label}>
            {label + ':'}
        </Text>
        <Text style={styles.text}>
            {value}
        </Text>
    </View>
);


export default class SoilSiteRequestJoin extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.data.name
    });

    constructor(props){
        super(props);
        this.state = {
            additionalInfo: null,
            allowedMaterial: null,
            imageURL: null,
            city: null,
            disallowedMaterial: null,
            instructions: null,
            makers: null,
            name: null,
            openToStatus: null,
            state: null,
            street: null,
            supporters: null,
            zip: null
        };
    }

    componentDidMount()
    {
        const data = this.props.navigation.state.params.data;
        this.setState(data);
    }

    FuctionToOpenManageSoilSiteActivity = () =>
    {
        this.props.navigation.navigate('ManageSoilSite');
    }

    render()
    {
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button label="Manage Soil Site" onPress={this.FuctionToOpenManageSoilSiteActivity}/>
                    <Button label="Request to Join" onPress={() => {}}/>
                    <Button label="Go to Message Board" onPress={() => {}}/>
                </View>
                <View style={styles.infoContainer}>
                    <KeyValue label="Status" value={this.state.openToStatus} />
                    <KeyValue label="Accepted Materials" value={this.state.allowedMaterial} />
                    <KeyValue label="Materials Not Accepted" value={this.state.disallowedMaterial} />
                    <KeyValue label="Number of Makers" value={this.state.makers} />
                    <KeyValue label="Number of Supporters" value={this.state.supporters} />
                </View>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-between'
    },
    infoContainer: {
        justifyContent: 'space-between',
        alignContent: 'flex-start'
    },
    keyValue: {
        marginBottom: 12
    },
    label: {
        color: 'black',
        fontSize: 18
    },
    text: {
        flexDirection: 'row',
        backgroundColor: '#d9d9d9',
        color: '#212121',
        paddingVertical: 8,
        paddingHorizontal: 6,
        fontSize: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#d1cfcf'
    }
});
