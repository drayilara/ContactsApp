import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN, REGISTER } from '../constants/routes';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createNativeStackNavigator();
  
const AuthNavigation = () => {

  return (
    <AuthStack.Navigator initialRouteName={LOGIN} screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;