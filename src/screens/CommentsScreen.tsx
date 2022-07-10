import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamsList} from '../navigation/navigators/HomeStackNavigator';
import {Comment} from '../types';
import axios from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  route: RouteProp<HomeStackParamsList, 'CommentsScreen'>;
  navigation: StackNavigationProp<HomeStackParamsList, 'CommentsScreen'>;
};

const CommentsScreen = ({
  route: {
    params: {post},
  },
  navigation,
}: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: post.title,
    });
  }, [navigation, post, comments]);

  useEffect(() => {
    let mounted = true;
    console.log('mounting');
    const getData = async () => {
      try {
        const response = await axios.get<Comment[]>(
          `http://localhost:3000/posts/${post.id}/comments`,
        );
        setTimeout(() => {
          if (mounted) {
            setComments(response.data);
          }
        }, 5000);
      } catch (error) {}
    };

    getData();

    return () => {
      console.log('unmounting');
      mounted = false;
    };
  }, [post]);

  return (
    <View>
      <Text>{comments.length}</Text>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({});
