import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Posts = () => {
  const [messages, setMessages] = useState([
    {author: 'Luis', comment: 'Buen Viaje', likesCount: 19000, imageUrl: ''},
    {author: 'Arturo', comment: 'Buen Viaje', likesCount: 19000, imageUrl: ''},
    {author: 'Jose', comment: 'Buen Viaje', likesCount: 19000, imageUrl: ''},
  ]);

  return (
    <View style={styles.containerView}>
      <FlatList
        data={messages}
        renderItem={({item}) => (
          <View>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderAuthor}>
                <Image
                  style={styles.authorImage}
                  source={require('../assets/Avatar.png')}
                />
                <Text style={styles.authorText}>{item.author}</Text>
              </View>
              <Image source={require('../assets/more.png')} />
            </View>
            <Image style={styles.postImage} />
          </View>
        )}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  containerView: {flex: 1},

  postImage: {width: '100%', aspectRatio: 1, backgroundColor: 'blue'},
  authorImage: {width: 30, height: 30, marginRight: 8},
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  authorText: {fontWeight: '700', fontSize: 12},
  postHeaderAuthor: {flexDirection: 'row', alignItems: 'center'},
});
