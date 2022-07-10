import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {HomeStackParamsList} from '../navigation/navigators/HomeStackNavigator';
import Stories from '../components/Stories';
import axios from 'axios';
import {Post} from '../types';
import PostsLists from '../components/PostsLists';

type Props = {
  navigation: NavigationProp<HomeStackParamsList, 'HomeScreen'>;
};

const HomeScreen = ({navigation}: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {}
    };

    getData();
  }, []);

  const onPressPost = (post: Post) =>
    navigation.navigate('CommentsScreen', {post});

  return (
    <SafeAreaView style={styles.containerView}>
      <Stories />
      <PostsLists posts={posts} onPressPost={onPressPost} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerView: {flex: 1, backgroundColor: 'white'},
});
