import PropTypes from 'prop-types';

import items from './items';

import { Header, Navigation, LinkItem, LinkElem } from './Navbar.styled';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <LinkItem key={id}>
      <LinkElem to={link}>{text}</LinkElem>
    </LinkItem>
  ));
  return (
    <Header>
      <nav>
        <Navigation>{elements}</Navigation>
      </nav>
    </Header>
  );
};

export default Navbar;

Navbar.propTypes = {
  navItems: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};
