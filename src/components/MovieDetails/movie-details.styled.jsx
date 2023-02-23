import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const MovieTitle = styled.a`
  font-size: 24px;
  font-weight: bold;
`;

const MoviePoster = styled.img`
  width: 300px;
  height: auto;
`;

const MovieInfoBox = styled.div`
  width: 500px;
`;

const MovieInfo = styled.span`
  font-weight: bold;
`;
export { Wrapper, MovieInfoBox, MovieTitle, MoviePoster, MovieInfo };
