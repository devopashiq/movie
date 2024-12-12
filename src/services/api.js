
import axios from "axios";



const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });
 
  return response.data.results;
};



export const getSearchedMovies = async (query) =>{

  const response = await axios.get(`${BASE_URL}/search/movie`,{
    params:{
        api_key:API_KEY,
        query:query,
    },
  });
  

  return response.data.results

}
