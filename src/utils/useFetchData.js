import React, { useState, useEffect } from 'react';
import { getPostList } from '../services/api/posts'
import { getUserList } from '../services/api/users';
import { getCommentList } from '../services/api/comments';

export const useFetchData = () => {

  const [postList, setPostList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const fetchPostList = async () => {
    const list = await getPostList();
    setPostList(list);
  };

  const fetchUserList = async () => {
    const list = await getUserList();
    setUserList(list);
  };

    const fetchCommentList = async () => {
    const list = await getCommentList();
    setCommentList(list);
  };

  useEffect(() => {
    fetchPostList();
    fetchUserList();
    fetchCommentList();
  }, []);

  const getUserData = (id) => {
    const userName = userList.find(user => user.id === id)?.name;
    const userEmail = userList.find(user => user.id === id)?.email
    return {
      userName: userName,
      userEmail: userEmail,
    }
  };

  const getCommentsByPost = (postId) => {
    return commentList.filter(comment => comment.postId === postId)
  };

  return { postList, userList, getUserData, getCommentsByPost }

};

export default useFetchData;