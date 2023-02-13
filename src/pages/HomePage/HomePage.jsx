import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import { getTrendingMovies } from 'shared/services/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState();
  // const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { results } = await getTrendingMovies();

        setMovies(results);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchPost();
  }, []);

  return <></>;
};

export default HomePage;
