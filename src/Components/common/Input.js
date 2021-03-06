import React from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.secure || false}
                    style={styles.input}
                    value={this.props.value}
                    onChangeText={this.props.onChange}
                    autoCapitalize="none"
                    keyboardType={this.props.type || 'default'}
                    multiline={false}
                />
            </View>
        );
    }
}

const styles = {
    input: {
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        fontSize: 18
    },
    label: {
        fontSize: 18
    },
    containerStyle: {
        display: 'flex',
        marginBottom: 15
    }
};

export { Input };
