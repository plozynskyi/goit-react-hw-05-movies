import styled from '@emotion/styled';

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

export { Header, Navigation };
