import { NavLink } from 'react-router-dom';

import items from './items';

import { Header, Navigation } from './Navbar.styled';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));
  return (
    <Header>
      <Navigation>{elements}</Navigation>
    </Header>
  );
};

export default Navbar;
