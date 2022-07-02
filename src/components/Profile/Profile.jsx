import PropTypes from 'prop-types';
import css from './ProfileCss.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <span className={css.label}>Followers</span>
          <span className={css.qnt}>{stats.followers}</span>
        </li>
        <li className={css.infoItem}>
          <span className={css.label}>Views</span>
          <span className={css.qnt}>{stats.views}</span>
        </li>
        <li className={css.infoItem}>
          <span className={css.label}>Likes</span>
          <span className={css.qnt}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.proptipes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};

export default Profile;
