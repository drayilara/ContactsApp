import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME} from '../constants/routes';
import HomeNavigation from './HomeNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={HOME} screenOptions={{headerShown: false}}>
      <Drawer.Screen name={HOME} component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
