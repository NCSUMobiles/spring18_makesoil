import React from 'react';
// import { Text, Image, View, ScrollView, TextInput, Button, StyleSheet} from 'react-native';
import { ScrollView, TextInput, Text, View } from 'react-native';
import { Button } from './common';
import { auth } from '../config/firebase';

class AccountScreen extends React.Component {

    static navigationOptions = {
        title: 'Manage Your Account'
    };

    constructor(props){
        super(props);
        this.state = {
            authorizedUser: null,
            currentPassword: '',
            newPassword: '',
            newPasswordRepeat: '',
            newEmail: '',
            loading: false,
            success: '',
            error: ''
        };
    }

    verifyPassword()
    {
        this.clearMessages();

        const user = auth.currentUser;
        const password = this.state.currentPassword;

        if (!user) {
            this.handleError('No current user found');
        } else if (!user.email) {
            this.handleError('User has no email address');
        } else if (!password) {
            this.handleError('Please enter a password');
        } else {
            this.setLoading(true);
            auth.signInAndRetrieveDataWithEmailAndPassword(user.email, password)
                .then((result) => {
                    this.setState({
                        authorizedUser: result.user
                    });
                })
                .catch(() => this.handleError('Incorrect password'))
                .finally(() => this.setLoading(false));
        }
    }

    updateEmail()
    {
        this.clearMessages();

        var email = this.state.newEmail;

        if (!email) {
            this.handleError('Please enter an email');
        } else {
            this.state.authorizedUser.updateEmail(email)
                .then(() => this.setState({
                    success: 'Email updated successfully',
                    newEmail: ''
                }))
                .catch((err) => this.handleError(err.toString()));
        }
    }

    updatePassword()
    {
        this.clearMessages();

        var password = this.state.newPassword;
        var passwordRepeat = this.state.newPasswordRepeat;

        if (!password || !passwordRepeat) {
            this.handleError('Please fill out the password forms');
        } else if (password !== passwordRepeat) {
            this.handleError('Passwords do not match');
        } else {
            this.state.authorizedUser.updatePassword(password)
                .then(() => this.setState({
                    success: 'Password updated successfully',
                    newPassword: '',
                    newPasswordRepeat: ''
                }))
                .catch((err) => this.handleError(err.toString()));
        }
    }

    clearMessages() {
        this.setState({
            success: '',
            error: ''
        });
    }

    handleError(message) {
        this.setState({
            error: message
        });
    }

    setLoading(value) {
        this.setState({loading: value});
    }

    render()
    {
        return (
            <ScrollView style={styles.containerStyle}>
                <Text style={styles.successText}>{this.state.success}</Text>
                <Text style={styles.errorText}>{this.state.error}</Text>
                { this.state.authorizedUser ? this.accountManagementForm() : this.passwordEntryForm() }
            </ScrollView>
        );
    }

    passwordEntryForm() {
        return (
            <View>
                <Text>Enter your current password</Text>
                <TextInput
                    secureTextEntry
                    value={this.state.currentPassword}
                    onChangeText={(value) => this.setState({currentPassword: value})}
                    onSubmitEditing={() => this.verifyPassword()}
                    autoCapitalize="none"
                />
                <Button
                    onPress={() => this.verifyPassword()}
                    label="Continue"
                />
            </View>
        );
    }

    accountManagementForm() {
        return (
            <View>
                <View>
                    <Text>Update your email</Text>
                    <TextInput
                        value={this.state.newEmail}
                        onChangeText={(value) => this.setState({newEmail: value})}
                        onSubmitEditing={() => this.updateEmail()}
                        autoCapitalize="none"
                    />
                    <Button
                        onPress={() => this.updateEmail()}
                        label="Update email"
                    />
                </View>
                <View>
                    <Text>Enter your new password</Text>
                    <TextInput
                        secureTextEntry
                        value={this.state.newPassword}
                        onChangeText={(value) => this.setState({newPassword: value})}
                        autoCapitalize="none"
                    />
                    <Text>Confirm password</Text>
                    <TextInput
                        secureTextEntry
                        value={this.state.newPasswordRepeat}
                        onChangeText={(value) => this.setState({newPasswordRepeat: value})}
                        autoCapitalize="none"
                    />
                    <Button
                        onPress={() => this.updatePassword()}
                        label="Update password"
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        padding: 10
    },

    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#ff6666'
    },

    successText: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#5CB85C'
    }
};

export default AccountScreen;
