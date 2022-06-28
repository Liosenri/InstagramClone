import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import StoryItem from './StoryItem';

const Stories = () => {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {[
          'luis',
          'jose',
          'anageles',
          'raul',
          'javier',
          'roberto',
          'roberto',
        ].map((name, index) => (
          <StoryItem key={name + index} name={name} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection: 'row',
  },
  contentContainerStyle: {paddingHorizontal: 16},
});
