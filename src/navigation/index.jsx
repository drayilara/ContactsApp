import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import DrawerNavigator from './DrawerNavigator';
import { useAppContext } from '../context/AppProviver';

const NavContainer = () => {
  const { authState } = useAppContext();
  const { isLoggedIn } = authState;

  return (
    <NavigationContainer>
        {isLoggedIn ? <DrawerNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default NavContainer;
