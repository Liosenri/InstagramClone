import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../../screens/SearchScreen';

export type SearchStackParamsList = {
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<SearchStackParamsList>();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={SearchScreen}
      options={{title: 'Buscar'}}
      name="SearchScreen"
    />
  </Stack.Navigator>
);

export default StackNavigator;
