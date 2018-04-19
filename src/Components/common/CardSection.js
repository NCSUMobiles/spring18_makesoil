import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

const CardSection = (props) =>
  (
    <KeyboardAvoidingView  style={styles.containerStyle}>
      {props.children}
    </KeyboardAvoidingView >
  );

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
