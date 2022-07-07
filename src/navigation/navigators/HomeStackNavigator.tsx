import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';

export type HomeStackParamsList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={HomeScreen}
      options={{title: 'Inicio'}}
      name="HomeScreen"
    />
  </Stack.Navigator>
);

export default StackNavigator;
