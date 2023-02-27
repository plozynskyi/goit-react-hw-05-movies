import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e6316174af6222f390b70a86dd33c4fc',
  },
});

export const getTrendingMovies = async page => {
  const { data } = await instance.get('/trending/all/week', {
    params: {
      page,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`, {});
  return data;
};

export const getMovieByNameCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieByNameReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};

export const getMovieByName = async (query, page) => {
  const { data } = await instance.get(`/search/movie?`, {
    params: {
      query,
      page,
    },
  });
  return data;
};
