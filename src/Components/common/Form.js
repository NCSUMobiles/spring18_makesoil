import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

const Form = (props) =>
    (
        <KeyboardAvoidingView style={styles.containerStyle}>
            {props.children}
        </KeyboardAvoidingView >
    );


const styles = {
    containerStyle: {
        padding: 20,
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    }
};

export { Form };
