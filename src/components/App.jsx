import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/Friends/friends.json';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/Friends/FriendList';
import css from 'Container.module.css';

export const App = () => {
  return (
    <div className={css.containerStyle}>
      <Profile
        stats={user.stats}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
