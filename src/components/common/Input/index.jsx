import React from 'react';
import { TextInput } from 'react-native';
import inputStyles from './styles';

const Input = ({
    // onChangeText,
    style,
    value,
    placeholder,
    defaultValue
}) => {
    return <TextInput
        style={[inputStyles.input, style]}
        defaultValue={defaultValue || null}
        placeholder={placeholder || null}
        value={value || null}
        // onChangeText={(newValue) => onChangeText(newValue)}
  />;
};


export default Input;