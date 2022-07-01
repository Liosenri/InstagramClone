import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Tabbar = () => {
  return (
    <View style={styles.containerView}>
      <Image
        resizeMode="contain"
        style={styles.iconImage}
        source={require('../assets/Home.png')}
      />
      <Image
        resizeMode="contain"
        style={styles.iconImage}
        source={require('../assets/Search.png')}
      />
      <Image
        resizeMode="contain"
        style={styles.iconImage}
        source={require('../assets/Reels.png')}
      />
      <Image
        resizeMode="contain"
        style={styles.iconImage}
        source={require('../assets/Shop.png')}
      />
      <Image
        resizeMode="contain"
        style={styles.iconImage}
        source={require('../assets/Avatar.png')}
      />
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  iconImage: {width: 24, height: 24},
});
