import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MainWrapper } from './styled';
import { getPostData } from '../../services/api/posts';
import PostCard from '../../components/PostCard';
import useFetchData from '../../utils/useFetchData';

const MainScreen = ({ navigation }) => {

  const userData = useFetchData().getUserData;

  const handleCardPress = (id) => {
    getPostData(id).then(post => 
      navigation.navigate('CommentScreen', {post: post})
    );
  };

  const renderItem = ({ item }) => (
    <PostCard
      title={item.title}
      body={item.body}
      authorName={userData(item.userId).userName}
      authorEmail={userData(item.userId).userEmail}
      onPress={() => handleCardPress(item.id)}
    />
  );

  return (
    <MainWrapper>
      <FlatList
        data={useFetchData().postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </MainWrapper>
  )

};

const styles = StyleSheet.create({
  flatList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
})

export default MainScreen;