import styled from '@emotion/styled';

const MoviesItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const MovieLinkById = styled.a`
  text-decoration: none;
`;

export { MoviesItem, MovieLinkById };
