import {StyleSheet, TouchableOpacity, View, Image, Button} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.containerView}>
      <Image source={require('../assets/IG_logo.png')} />
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
        <TouchableOpacity>
          <Image
            style={styles.buttonImage}
            source={require('../assets/messenger.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerView: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {flexDirection: 'row'},
  buttonImage: {marginLeft: 10},
});
