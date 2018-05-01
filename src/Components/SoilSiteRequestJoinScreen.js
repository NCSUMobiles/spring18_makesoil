import React, { Component } from 'react';
import { Text, ScrollView, Button, StyleSheet} from 'react-native';

export default class SoilSiteRequestJoin extends Component {

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
        const {params} = this.props.navigation.state;
        let url = 'https://us-central1-makesoilvimd.cloudfunctions.net/soilSites';

        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                console.log('Name: ',responseJson[params.itemId].name);
                return responseJson[params.itemId];
            })
            .then(result => {
                console.log('This is what I received in promise: ', result);
                self.setState(result);
            })
            .catch(error => console.log('Error: ', error));
    }

    render()
    {
        return(
            <ScrollView>
                <Text style = {styles.title}>
                    {this.state.name}
                </Text>
                <Text style = {styles.label}>
                Status
                </Text>
                <Text style = {styles.text}>
                    {this.state.openToStatus}
                </Text>
                <Text style = {styles.label}>
                Accepted Material
                </Text>
                <Text style = {styles.text}>
                    {this.state.allowedMaterial}
                </Text>
                <Text style = {styles.label}>
                Material Not Allowed
                </Text>
                <Text style = {styles.text}>
                    {this.state.disallowedMaterial}
                </Text>
                <Text style = {styles.label}>
                Soil Makers
                </Text>
                <Text style = {styles.text}>
                    {this.state.makers}
                </Text>
                <Text style = {styles.label}>
                Soil Supporters
                </Text>
                <Text style = {styles.text}>
                    {this.state.supporters}
                </Text>
                <Button
                    title = "Go to Message Board"
                    style = {styles.button}/>

                <Button
                    title = "Request to Join"
                    style = {{flex:1, width: 20, height: 50, backgroundColor: 'blue'}}/>

                <Button
                    title = "Manage Soil Site"
                    style = {{flex:1, width: 20, height: 50, backgroundColor: 'blue'}}/>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    button: {
        color: 'blue',
        flex: 1,
        width: 20,
        height: 50
    },
    text: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'lightgreen',
        fontSize: 18,
        color: 'black'
    },
    title: {
        color: 'maroon',
        fontSize: 22,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    label: {
        color: 'black',
        fontSize: 22,
        alignSelf: 'center'
    },
});
