import React from 'react';
import { View, Text} from 'react-native';

const Card = (props) =>
  (
    <KeyboardAvoidingView style={styles.containerStyle} behavior="padding">
      {props.children}
    </KeyboardAvoidingView >
  );


const styles = {
  }
};
