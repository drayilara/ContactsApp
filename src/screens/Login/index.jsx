import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../../components/common/Container/index';
import Input from '../../components/common/Input';

const Login = () => {
  const backgroundColor = {backgroundColor: 'red', width: '50%'}
  return (
    <Container>
      <View style={{alignItems: 'center'}}>
        <Text>Login</Text>
        <Input style={backgroundColor} />
      </View>
    </Container>
  );
};

export default Login;
