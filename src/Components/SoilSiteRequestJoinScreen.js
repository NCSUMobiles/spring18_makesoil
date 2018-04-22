import React, { Component } from 'react';
import { Text, Image,View, ScrollView, TextInput, Button, StyleSheet} from 'react-native';
import { Header, Card, CardSection, Input, Spinner } from './common';

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
        }
    }
    componentDidMount()
    {
        let url = "https://us-central1-makesoilvimd.cloudfunctions.net/soilSites"
        async function getData(){
            try{
                let response  = await fetch(url);
                let responseJson = await response.json();
                console.log("Name: ",responseJson[4].name);
                //changeState(responseJson)
                return responseJson[4];
            }
            catch(error){
                console.log("Error: ", error);
            }
        }
        var self = this;
        var promise = getData();
        var returnedresult = null;
        promise.then(function(result){
            console.log("This is what I received in promise: ",result);
            self.setState({
                additionalInfo: result.additionalInfo,
                allowedMaterial:  result.allowedMaterial,
                imageURL: result.imageURL,
                city:  result.city,
                disallowedMaterial:  result.disallowedMaterial,
                instructions: result.instructions,
                makers:  result.makers,
                name: result.name,
                openToStatus: result.openToStatus,
                state: result.state,
                street: result.street,
                supporters: result.supporters,
                zip: result.zip
            });
        });
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
                {/* <TextInput
                placeholder = ""
                /> */}
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
        height: 20,
        padding: 25,
        backgroundColor: 'lightgreen',
        fontSize: 18
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
