import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen';

export type ProfileStackParamsList = {
  ProfileScreen: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={ProfileScreen}
      options={{title: 'Perfil'}}
      name="ProfileScreen"
    />
  </Stack.Navigator>
);

export default StackNavigator;
