import {Button, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ShopStackParamsList} from '../navigation/navigators/ShopStackNavigator';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<ShopStackParamsList, 'ShopScreen'>;
  route: RouteProp<ShopStackParamsList, 'ShopScreen'>;
};

const ShopScreen = ({navigation: {navigate}}: Props) => {
  return (
    <View>
      <Text>ShopScreen</Text>
      <Button
        title="Open product"
        onPress={() => navigate('ProductDetailScreen')}
      />
    </View>
  );
};

export default ShopScreen;
