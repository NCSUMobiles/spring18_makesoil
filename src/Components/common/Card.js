import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

const Card = (props) =>
    (
        <KeyboardAvoidingView style={styles.containerStyle} behavior="padding">
            {props.children}
        </KeyboardAvoidingView >
    );


const styles = {
    containerStyle: {
    //borderWidth: 1,
    //borderRadius: 2,
    //borderColor: '#ddd',
    //borderBottomWidth: 0,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.1,
    //shadowRadius: 2,
        padding: 5,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        //backgroundColor: '#cdf7e5',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export { Card };
