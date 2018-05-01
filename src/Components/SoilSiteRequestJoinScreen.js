import React, { Component } from 'react';
import { Text, ScrollView, Button, StyleSheet} from 'react-native';

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

    render()
    {
        return(
            <ScrollView>
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
