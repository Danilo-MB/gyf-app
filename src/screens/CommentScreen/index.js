import React, { useEffect, useState } from 'react';
import { MainWrapper } from './styled';
import Card from '../../components/Card';
import useFetchData from '../../utils/useFetchData';



const CommentScreen = ({ navigation, route }) => {

  const { post } = route.params;
  const userData = useFetchData().getUserData;

  return (
    <MainWrapper>
      <Card 
        title={post.title}
        body={post.body}
        authorName={userData(post.userId).userName}
        authorEmail={userData(post.userId).userEmail}
      />
    </MainWrapper>
  )

};

export default CommentScreen;

