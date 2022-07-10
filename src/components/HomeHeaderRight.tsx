import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp} from '@react-navigation/native';
import {HomeStackParamsList} from '../navigation/navigators/HomeStackNavigator';

type Props = {
  navigation: NavigationProp<HomeStackParamsList, 'HomeScreen'>;
};

const HomeHeaderRight = ({navigation}: Props) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity>
        <Image source={require('../assets/add.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.buttonImage}
          source={require('../assets/heart.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MessagesScreen')}>
        <Image
          style={styles.buttonImage}
          source={require('../assets/messenger.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeaderRight;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  buttonImage: {marginLeft: 10},
});
