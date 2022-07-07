import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReelsScreen from '../../screens/ReelsScreen';

export type ReelsStackParamsList = {
  ReelsScreen: undefined;
};

const Stack = createNativeStackNavigator<ReelsStackParamsList>();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={ReelsScreen}
      options={{title: 'Reels'}}
      name="ReelsScreen"
    />
  </Stack.Navigator>
);

export default StackNavigator;
