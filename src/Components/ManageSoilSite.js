import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native';

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
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<Text>
				     You can edit the requirements of your soil site here
				</Text>
				<Form type={SoilMaker}/>
					<Button
						title="Edit Site"
					/>
			</ScrollView>	
			);
	}
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
});