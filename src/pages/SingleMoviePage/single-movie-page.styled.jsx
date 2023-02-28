import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SingleMovieBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LinkListItem = styled.li``;

const LinkElem = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  &.active {
    color: coral;
    text-decoration: underline;
    font-weight: bold;
  }
  &:hover {
    color: coral;
  }
`;

export { SingleMovieBox, LinkList, LinkListItem, LinkElem };
