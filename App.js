import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import Stories from './src/components/Stories';
import Header from './src/components/Header';
import Tabbar from './src/components/Tabbar';
import Posts from './src/components/Posts';

const App = () => {
  return (
    <SafeAreaView style={styles.containerView}>
      <Header />
      <Stories />
      <Posts />
      <Tabbar />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerView: {flex: 1},
});
