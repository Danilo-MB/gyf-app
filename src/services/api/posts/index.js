import axios from 'axios';

const path = (id = '') => `https://jsonplaceholder.typicode.com/posts/${id}`;

export const getPostList = async () => {
  try {
    const response = await axios.get(path());
    // console.log(response.data, 'response')
    return response.data;
  } catch (error) {
    console.log(error, 'error del getPostList')
    throw error;
  }
};

export const getPostData = async (id) => {
  try {
    const response = await axios.get(path(id));
    // console.log(response.data, 'response')
    return response.data;
  } catch (error) {
    console.log(error, 'error del getPostList')
    throw error;
  }
};



// export const getOtherCities = async () => {
//   const cityNames = ['Villa Lugano', 'Tokio', 'Boruku', 'Glenover', 'Hoag'];
//   const cities = [];
//   await Promise.all(
//     cityNames.map(city => {
//       return getCurrentCityInfo(city).then(res => cities.push(res));
//     }),
//   );
//   return cities;
// };

// export const getDetailedPokemonList = async () => {
//   const pokemonList = await axios.get(path());
//   const detailedlist = [];
//   await Promise.all(
//     pokemonList?.map((poke, index) => {
//       getOnePokemon(index).then((element => detailedlist.push(element)))
//     })
//   )
//   console.log(detailedlist, 'lista en el servicio')
//   return detailedlist;
// };

// export const getOnePokemon = async (id) => {
//   try {
//     const response = await axios.get(path(id));
//     // console.log(response, 'response del getOnePokemon')
//     return response.data;
//   } catch (error) {
//     console.log(error, 'error del getOnePokemon')
//     throw error;
//   }
// };