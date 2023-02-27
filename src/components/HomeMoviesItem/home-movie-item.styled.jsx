import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const MovieLink = styled(Link)`
  text-decoration: none;
`;

const MoviesItem = styled.li`
  transition: scale 250ms linear;
  list-style: none;
  width: 250px;
  &:hover h3 {
    color: coral;
  }
  &:hover {
    font-weight: 600;
    scale: 1.05;
  }
`;

const MoviePoster = styled.img`
  margin-bottom: 15px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const MovieTitle = styled.h3`
  text-align: center;
  color: #000;
  font-weight: bold;
  transition: scale 250ms linear;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export { MovieLink, MoviesItem, MoviePoster, MovieTitle };
