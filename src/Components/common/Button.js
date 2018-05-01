import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, label }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
    },
    buttonStyle: {
    //flex: 1,
    //alignSelf: 'stretch',
        backgroundColor: '#5CB85C',
        padding: 10,
        borderRadius: 20,
        borderColor: '#007aff',
        justifyContent:'center',
        alignItems:'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    }
};

export { Button };
