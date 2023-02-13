import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e6316174af6222f390b70a86dd33c4fc',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/all/week', {});
  console.log(data);
  return data;
};
