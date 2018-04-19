import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) => {
  const { inputStyle, inputContainerStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View style={inputContainerStyle}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#fff',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 18,
    flex: 1,
    opacity: 1,
  },
  inputContainerStyle: {
    flex:1,
    flexDirection:'row'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent:'center',
  }
};

export { Input };
