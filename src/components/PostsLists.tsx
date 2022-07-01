import {FlatList, StyleSheet, Text, View, ListRenderItem} from 'react-native';
import React from 'react';
import {Post} from '../types';
import PostItem from './PostItem';

type Props = {
  posts: Post[];
};

const PostsLists = ({posts}: Props) => {
  const renderItem: ListRenderItem<Post> = ({item}) => <PostItem post={item} />;

  return (
    <View style={styles.containerView}>
      <FlatList data={posts} renderItem={renderItem} />
    </View>
  );
};

export default PostsLists;

const styles = StyleSheet.create({containerView: {flex: 1}});
