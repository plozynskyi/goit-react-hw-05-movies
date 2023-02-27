import PropTypes from 'prop-types';

import {
  CastListBox,
  CastItem,
  CastItemName,
  ProfilePath,
} from './cast-list.styled';

const CastList = ({ castMovie }) => {
  const profileDefaultPath =
    'https://cdn.pixabay.com/photo/2017/01/10/03/54/avatar-1968236_960_720.png';
  const imageUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <CastListBox>
      {castMovie.map(({ cast_id, name, profile_path }) => (
        <CastItem key={cast_id}>
          <ProfilePath
            src={
              profile_path ? `${imageUrl}${profile_path}` : profileDefaultPath
            }
            alt={name}
            width="100px"
          />
          <CastItemName>{name}</CastItemName>
        </CastItem>
      ))}
    </CastListBox>
  );
};

export default CastList;

CastList.defaultProps = {
  castMovie: [],
};

CastList.propTypes = {
  castMovie: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
