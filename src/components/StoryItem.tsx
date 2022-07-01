import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Story} from '../types';

type Props = {
  story: Story;
};

const StoryItem = ({story: {avatar, username}}: Props) => {
  return (
    <View style={styles.storyItem}>
      <Image
        style={styles.storyPhoto}
        source={{
          uri: avatar,
        }}
      />
      <Text>{username}</Text>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  storyPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 5,
  },
  storyItem: {
    alignItems: 'center',
    padding: 5,
  },
  contentContainerStyle: {padding: 20},
});
