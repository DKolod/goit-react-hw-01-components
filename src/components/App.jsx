import user from 'components/Profile/user.json';
import Profile from 'components/Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile
        stats={user.stats}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      ggggg
    </div>
  );
};
