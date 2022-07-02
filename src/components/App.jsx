import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
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
    </div>
  );
};
