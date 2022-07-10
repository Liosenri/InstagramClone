import React from 'react';
import {Platform} from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import MessagesScreen from '../../screens/MessagesScreen';
import CommentsScreen from '../../screens/CommentsScreen';
import HomeHeaderRight from '../../components/HomeHeaderRight';
import {createStackNavigator} from '@react-navigation/stack';
import {Post} from '../../types';

export type HomeStackParamsList = {
  HomeScreen: undefined;
  MessagesScreen: undefined;
  CommentsScreen: {post: Post};
};

const Stack = createStackNavigator<HomeStackParamsList>();

const fontFamily =
  Platform.OS === 'ios' ? 'FSP DEMO - Blue Vinyl Regular' : 'Insta-Regular';

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={HomeScreen}
      options={({navigation}) => ({
        title: 'Instagram',
        headerRight: () => <HomeHeaderRight navigation={navigation} />,
        headerTitleStyle: {fontFamily, fontSize: 24},
        headerTitleAlign: 'left',
      })}
      name="HomeScreen"
    />
    <Stack.Screen
      component={MessagesScreen}
      options={{title: 'Mensahes'}}
      name="MessagesScreen"
    />
    <Stack.Screen
      component={CommentsScreen}
      options={{title: 'Comentarios'}}
      name="CommentsScreen"
    />
  </Stack.Navigator>
);

export default StackNavigator;
