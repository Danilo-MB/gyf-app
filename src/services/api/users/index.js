import axios from 'axios';

const path = (id = '') => `https://jsonplaceholder.typicode.com/users/${id}`;

export const getUserList = async (id) => {
  try {
    const response = await axios.get(path());
    // console.log(response.data, 'response')
    return response.data;
  } catch (error) {
    console.log(error, 'error del getUserList')
    throw error;
  }
};

export const getUserData = async (id) => {
  try {
    const response = await axios.get(path(id));
    // console.log(response.data, 'response')
    return response.data;
  } catch (error) {
    console.log(error, 'error del getUserData')
    throw error;
  }
};

// export const getUserData = async (id) => {
//   const userList = await axios.get(path());
//   const userName = userList.find(user => user.id === id)?.name;
//   const userEmail = userList.find(user => user.id === id)?.email
//   return {
//     userName: userName,
//     userEmail: userEmail,
//   }
// };