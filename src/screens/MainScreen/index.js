import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MainWrapper, InputSection, CardsSection } from './styled';
import SearchInput from '../../components/SearchInput';
import SearchIcon from '../../components/icons/Search';
import { getPostData } from '../../services/api/posts';
import { colors } from '../../styles';
import Card from '../../components/Card';
import useFetchData from '../../utils/useFetchData';

const MainScreen = ({ navigation }) => {

  const userData = useFetchData().getUserData;

  const handleCardPress = (id) => {
    getPostData(id).then(post => 
      navigation.navigate('CommentScreen', {post: post})
    );
  };

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      body={item.body}
      authorName={userData(item.userId).userName}
      authorEmail={userData(item.userId).userEmail}
      onPress={() => handleCardPress(item.id)}
    />
  );

  return (
    <MainWrapper>
      <InputSection>
        <SearchInput
          placeholder='Buscar un pokemon' 
          rightIcon={<SearchIcon color={colors.gray} width={20} height={20} />}
        />
      </InputSection>
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