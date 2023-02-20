// import { NavLink } from 'react-router-dom';

import items from './items';

import { Header, Navigation, LinkElem } from './Navbar.styled';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <LinkElem to={link}>{text}</LinkElem>
    </li>
  ));
  return (
    <Header>
      <Navigation>{elements}</Navigation>
    </Header>
  );
};

export default Navbar;
