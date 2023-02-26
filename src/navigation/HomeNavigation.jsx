import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACTS,
  CREATE_CONTACT,
  SETTINGS,
  CONTACT_DETATILS,
} from '../constants/routes';
import ContactDetails from '../screens/ContactDetails';
import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';
import CreateContact from '../screens/CreateContact';

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name={CONTACTS} component={Contacts} />
        <HomeStack.Screen name={CONTACT_DETATILS} component={ContactDetails} />
        <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
        <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
