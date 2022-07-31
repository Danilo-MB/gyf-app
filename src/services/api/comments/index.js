import axios from 'axios';

const path = (id = '') => `https://jsonplaceholder.typicode.com/comments/${id}`;

export const getCommentList = async () => {
  try {
    const response = await axios.get(path());
    // console.log(response.data, 'response')
    return response.data;
  } catch (error) {
    console.log(error, 'error del getCommentList')
    throw error;
  }
};