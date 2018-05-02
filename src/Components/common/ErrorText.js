import React from 'react';
import { Text } from 'react-native';

const ErrorText = ({text}) =>
    (
        <Text style={styles.errorTextStyle}>
            {text}
        </Text>
    );

const styles = {
    errorTextStyle: {
        minHeight: 40,
        fontSize: 20,
        marginBottom: 10,
        alignSelf: 'center',
        color: '#ff6666'
    },
};

export { ErrorText };