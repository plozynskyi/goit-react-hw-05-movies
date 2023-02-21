import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  border-bottom: 1px;
  border-color: red;
`;

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  list-style: none;
  text-decoration: none;
`;

const LinkElem = styled(NavLink)`
  font-size: 24px;
  &.active {
    color: red;

    font-weight: bold;
  }
`;

export { Header, Navigation, LinkElem };
