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
                    onSubmitEditing={this.props.onSubmit}
                    autoCapitalize="none"
                    keyboardType={this.props.type || 'default'}
                />
            </View>
        );
    }
}

const styles = {
    input: {
        backgroundColor: '#fff',
        fontSize: 18,
    },
    label: {
        fontSize: 18,
        // paddingLeft: 20,
        // flex: 1
    },
    containerStyle: {
        display: 'flex',
        marginBottom: 15
    }
};

export { Input };
