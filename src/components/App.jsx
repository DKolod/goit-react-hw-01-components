import user from 'components/Profile/user.json';
import Profile from 'components/Profile/Profile';

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
    </div>
  );
};
