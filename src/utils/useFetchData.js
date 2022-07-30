import React, { useState, useEffect } from 'react';
import { getPostList } from '../services/api/posts'
import { getUserList } from '../services/api/users';

export const useFetchData = () => {

  const [postList, setPostList] = useState([]);
  const [userList, setUserList] = useState([]);

  const fetchPostList = async () => {
    const list = await getPostList();
    setPostList(list);
  };

  const fetchUserList = async () => {
    const list = await getUserList();
    setUserList(list);
  };

  useEffect(() => {
    fetchPostList();
    fetchUserList();
  }, []);

  const getUserData = (id) => {
    const userName = userList.find(user => user.id === id)?.name;
    const userEmail = userList.find(user => user.id === id)?.email
    return {
      userName: userName,
      userEmail: userEmail,
    }
  };

  return { postList, userList, getUserData }

};

export default useFetchData;