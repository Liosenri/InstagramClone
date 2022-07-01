import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Stories from './src/components/Stories';
import Header from './src/components/Header';
import Tabbar from './src/components/Tabbar';
import PostsLists from './src/components/PostsLists';
import {Post} from './src/types';
import axios from 'axios';

const App = () => {
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

  return (
    <SafeAreaView style={styles.containerView}>
      <Header />
      <Stories />
      <PostsLists posts={posts} />
      <Tabbar />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerView: {flex: 1},
});
