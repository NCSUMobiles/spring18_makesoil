import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {disabled: false, pressed: false};
    }


    componentWillMount() {
        this._mounted = true;
    }


    componentWillUnmount() {
        this._mounted = false;
    }

    _onPressIn() {
        this.setState({pressed: true});
    }

    _onPressOut() {
        this.setState({pressed: false});
    }

    _onPress(val) {
        if (this.state.disabled) {
            return;
        }

        this.setState({disabled: true});
        Promise.resolve(this.props.onPress(val))
            .finally(() => {
                if (this._mounted) {
                    this.setState({disabled: false});
                }
            });
    }

    _getColor() {
        const alpha = this.state.pressed || this.state.disabled ? '.5' : '1';
        return `rgba(92, 181, 107, ${alpha})`;
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPressIn={() => this._onPressIn()}
                    onPressOut={() => this._onPressOut()}
                    onPress={val => this._onPress(val)}
                >
                    <View style={{...styles.button, backgroundColor: this._getColor()}}>
                        <Text style={styles.text}>
                            {this.props.label}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    text: {
        color: '#f7fcf8',
        fontSize: 24,
        fontWeight: '500',
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 15,
        borderColor: '#2f703a',
        borderWidth: 2
        // backgroundColor set dynamically
    },
    container: {
        alignItems: 'center',
        marginBottom: 15
    }
};

export { Button };
