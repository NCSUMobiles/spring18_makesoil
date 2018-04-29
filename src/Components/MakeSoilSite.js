import React, { Component } from 'react';
import {View, StyleSheet,Text} from 'react-native';
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