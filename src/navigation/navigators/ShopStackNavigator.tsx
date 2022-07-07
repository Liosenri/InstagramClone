import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopScreen from '../../screens/ShopScreen';
import ProductDetailScreen from '../../screens/ProductDetailScreen';

export type ShopStackParamsList = {
  ShopScreen: undefined;
  ProductDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<ShopStackParamsList>();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={ShopScreen}
      options={{title: 'Comprar'}}
      name="ShopScreen"
    />
    <Stack.Screen
      component={ProductDetailScreen}
      options={{title: 'Detalles del producto'}}
      name="ProductDetailScreen"
    />
  </Stack.Navigator>
);

export default StackNavigator;
