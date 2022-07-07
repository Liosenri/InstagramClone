import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootTabNavigator from './src/navigation/navigators/RootTabNavigator';

// type HomeStackParamsList = {
//   HomeScreen: undefined;
//   HomeDetailScreen: undefined;
//   UserProfileScreen: {userName?: string};
// };

// const Stack = createStackNavigator<HomeStackParamsList>();
// const NaviteStack = createNativeStackNavigator<HomeStackParamsList>();

// type HomeScreenProps = {
//   navigation: NavigationProp<HomeStackParamsList, 'HomeScreen'>;
// };

// const Home = ({navigation}: HomeScreenProps) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         title="Go to details"
//         onPress={() => navigation.navigate('HomeDetailScreen')}
//       />
//     </View>
//   );
// };

// type HomeDetailsScreenProps = {
//   navigation: NavigationProp<HomeStackParamsList, 'HomeDetailScreen'>;
// };

// const HomeDetail = ({navigation}: HomeDetailsScreenProps) => {
//   const [name, setName] = useState('');
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <TextInput
//         style={{
//           width: 300,
//           height: 44,
//           borderWidth: 1,
//           borderColor: 'blue',
//           padding: 10,
//           marginBottom: 10,
//         }}
//         value={name}
//         onChangeText={setName}
//         placeholder="Enter your name"
//       />
//       <Button
//         title="Go to user profile"
//         onPress={() =>
//           navigation.navigate('UserProfileScreen', {userName: name})
//         }
//       />
//     </View>
//   );
// };

// type UserProfileScreenProps = {
//   navigation: NavigationProp<HomeStackParamsList, 'UserProfileScreen'>;
//   route: RouteProp<HomeStackParamsList, 'UserProfileScreen'>;
// };

// const UserProfile = ({
//   route: {
//     params: {userName},
//   },
// }: UserProfileScreenProps) => (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text>{userName || 'Sin nombre'}</Text>
//   </View>
// );

// const NativeHomeStack = () => (
//   <NaviteStack.Navigator>
//     <NaviteStack.Screen
//       name="HomeScreen"
//       component={Home}
//       options={{title: 'Home', headerLargeTitle: true}}
//     />
//     <NaviteStack.Screen
//       name="HomeDetailScreen"
//       component={HomeDetail}
//       options={{title: 'Detalles'}}
//     />
//     <NaviteStack.Screen
//       name="UserProfileScreen"
//       component={UserProfile}
//       options={{title: 'Perril de usuario'}}
//     />
//   </NaviteStack.Navigator>
// );

// const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="HomeScreen"
//       component={Home}
//       options={{title: 'Home'}}
//     />
//     <Stack.Screen
//       name="HomeDetailScreen"
//       component={HomeDetail}
//       options={{
//         title: 'Detalles',
//       }}
//     />
//     <Stack.Screen
//       name="UserProfileScreen"
//       component={UserProfile}
//       options={{title: 'Perfil de usuario'}}
//     />
//   </Stack.Navigator>
// );

type Props = {};

const App = ({}: Props) => {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
};

export default App;
