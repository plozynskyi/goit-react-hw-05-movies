import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const MoviePoster = styled.img`
  width: 300px;
  height: auto;
`;
export { Wrapper, MovieTitle, MoviePoster };
