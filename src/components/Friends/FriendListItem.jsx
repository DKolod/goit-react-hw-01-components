import css from './FriendList.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={
          isOnline
            ? { backgroundColor: '#3ABF5B' }
            : { backgroundColor: '#E34E4E' }
        }
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;
