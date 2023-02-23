import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.header``;

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  list-style: none;
`;

const LinkElem = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
  &.active {
    color: coral;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export { Header, Navigation, LinkElem };
