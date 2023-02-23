import PropTypes from 'prop-types';

import { SectionBox, Container } from './section.styled';

const Section = ({ children }) => {
  return (
    <SectionBox>
      <Container>{children}</Container>
    </SectionBox>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
