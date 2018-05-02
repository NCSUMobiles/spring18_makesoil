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
        padding: 5,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
};

export { Card };
