import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Post} from '../types';

type Props = {
  post: Post;
};

const PostItem = ({post: {title, avatar, username, image}}: Props) => {
  return (
    <View>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderAuthor}>
          <Image style={styles.avatarImage} source={{uri: avatar}} />
          <Text style={styles.authorText}>{username}</Text>
        </View>
        <Image source={require('../assets/more.png')} />
      </View>
      <Image style={styles.postImage} source={{uri: image}} />
      <View style={styles.postFooter}>
        <View style={styles.buttonsContainer}>
          <Image
            style={styles.iconButton}
            source={require('../assets/heart.png')}
          />
          <Image
            style={styles.iconButton}
            source={require('../assets/comment.png')}
          />
          <Image source={require('../assets/share.png')} />
        </View>

        <Image source={require('../assets/bookmark.png')} />
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  postImage: {width: '100%', aspectRatio: 1, backgroundColor: 'blue'},
  avatarImage: {width: 30, height: 30, marginRight: 8, borderRadius: 15},
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  authorText: {fontWeight: '700', fontSize: 12},
  postHeaderAuthor: {flexDirection: 'row', alignItems: 'center'},
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  iconButton: {marginRight: 10},
});
