import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import StoryItem from './StoryItem';
import axios from 'axios';
import {Story} from '../types';

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Story[]>(
          'http://localhost:3000/stories',
        );
        setStories(response.data);
      } catch (error) {}
      setLoading(false);
    };

    getData();
  }, []); // User useEffect sin dependencias es como simular un componentDidMount

  return (
    <View style={styles.storiesContainer}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {stories.map((item, index) => (
            <StoryItem key={item.id + index} story={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection: 'row',
  },
  contentContainerStyle: {paddingHorizontal: 10},
  loadingContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
