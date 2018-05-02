import React from 'react';
import { Text, View } from 'react-native';
import { Button, Input, Form, ErrorText } from './common';
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
            return auth.signInAndRetrieveDataWithEmailAndPassword(user.email, password)
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
            return this.state.authorizedUser.updateEmail(email)
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
            return this.state.authorizedUser.updatePassword(password)
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

    render() {
        return (
            <View>
                <ErrorText text={this.state.error} />
                { this.state.authorizedUser ? this.accountManagementForm() : this.passwordEntryForm() }
            </View>
        );
    }

    passwordEntryForm() {
        return (
            <Form>
                <Input
                    label="Enter your current password"
                    secure={true}
                    value={this.state.currentPassword}
                    onChange={(value) => this.setState({currentPassword: value})}
                />
                <Button
                    onPress={() => this.verifyPassword()}
                    label="Continue"
                />
            </Form>
        );
    }

    accountManagementForm() {
        return (
            <Form>
                <Input
                    label="Update your email"
                    value={this.state.newEmail}
                    onChange={(value) => this.setState({newEmail: value})}
                    onSubmit={() => this.updateEmail()}
                    type="email-address"
                />
                <Button
                    onPress={() => this.updateEmail()}
                    label="Update email"
                />
                <Input
                    label="Enter your new password"
                    secure={true}
                    value={this.state.newPassword}
                    onChange={(value) => this.setState({newPassword: value})}
                />
                <Input
                    label="Confirm password"
                    secure={true}
                    value={this.state.newPasswordRepeat}
                    onChange={(value) => this.setState({newPasswordRepeat: value})}
                />
                <Button
                    onPress={() => this.updatePassword()}
                    label="Update password"
                />
                <Text style={styles.successText}>{this.state.success}</Text>
            </Form>
        );
    }
}

const styles = {
    successText: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#5CB85C'
    }
};

export default AccountScreen;
