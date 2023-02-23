import styled from '@emotion/styled';

const CastListBox = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
`;

const CastItem = styled.li`
  list-style: none;
  /* border: 2px solid coral; */
  border-radius: 15px;
  width: 120px;
`;

const CastItemName = styled.p`
  height: 37px;
  font-weight: bold;
  text-align: center;
`;

const ProfilePath = styled.img`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export { CastListBox, CastItem, CastItemName, ProfilePath };
