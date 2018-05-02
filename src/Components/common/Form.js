import React from 'react';
import { ScrollView } from 'react-native';

const Form = (props) =>
    (
        <ScrollView contentContainerStyle={styles.container}>
            {props.children}
        </ScrollView >
    );

const styles = {
    container: {
        padding: 20,
        flexDirection:'column',
        alignItems: 'stretch',
        // justifyContent: 'space-between',
    }
};

export { Form };
