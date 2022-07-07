import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../../navigation/navigators/HomeStackNavigator';
import SearchStackNavigator from '../../navigation/navigators/SearchStackNavigator';
import ProfileStackNavigator from '../../navigation/navigators/ProfileStackNavigator';
import ReelsStackNavigator from '../../navigation/navigators/ReelsStackNavigator';
import ShopStackNavigator from './ShopStackNavigator';
import {Image} from 'react-native';

type RootTabNavigatorParamsList = {
  HomeStack: undefined;
  SearchStack: undefined;
  ProfileStack: undefined;
  ShopStack: undefined;
  ReelsStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabNavigatorParamsList>();

export default () => (
  <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStackNavigator}
      options={{
        tabBarIcon: ({size, focused}) => (
          <Image
            style={{
              width: size,
              height: size,
              tintColor: focused ? 'black' : 'gray',
            }}
            source={require('../../assets/Home.png')}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="SearchStack"
      component={SearchStackNavigator}
      options={{
        tabBarIcon: ({size, focused}) => (
          <Image
            style={{
              width: size,
              height: size,
              tintColor: focused ? 'black' : 'gray',
            }}
            source={require('../../assets/Search.png')}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="ReelsStack"
      component={ReelsStackNavigator}
      options={{
        tabBarIcon: ({size, focused}) => (
          <Image
            style={{
              width: size,
              height: size,
              tintColor: focused ? 'black' : 'gray',
            }}
            source={require('../../assets/Reels.png')}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="ShopStack"
      component={ShopStackNavigator}
      options={{
        tabBarIcon: ({size, focused}) => (
          <Image
            style={{
              width: size,
              height: size,
              tintColor: focused ? 'black' : 'gray',
            }}
            source={require('../../assets/Shop.png')}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileStack"
      component={ProfileStackNavigator}
      options={{
        tabBarIcon: ({size}) => (
          <Image
            style={{
              width: size,
              height: size,
            }}
            source={require('../../assets/Avatar.png')}
            resizeMode="contain"
          />
        ),
      }}
    />
  </Tab.Navigator>
);
