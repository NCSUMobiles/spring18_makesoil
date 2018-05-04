import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { Button } from './common';
import Toast, {DURATION} from 'react-native-easy-toast';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const SoilMaker = t.struct({
	owner_name: t.String,
	address: t.String,
	description: t.String,
	What_are_accepted: t.String,
	What_are_not_accepted: t.String,	
	terms: t.Boolean
});

export default class ManageSoilSite extends Component{
	render()
	{
		return(
            <View contentContainerStyle={styles.Container}>
                <Text h2>
				     You can edit the requirements of your soil site here
			    </Text>                
			    <ScrollView style={styles.contentContainer}>
				    <Form type={SoilMaker}/>   
                    <Button	label="Edit Site" onPress={()=> {
                        this.refs.toast.show('Your site has been edited!',DURATION.LONG);
                    }}/>
                    <Toast 
                        ref = "toast"
                        position = 'center'
                    /> 
			    </ScrollView>	               
            </View>
			);
	}
}

const styles = StyleSheet.create({
  contentcontainer:{
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  Container:{
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff', 
  }
});