import Profile from "components/Profile";
import user from 'user.json'
export const App = () => {
  return (
    <div
    >
        <Profile
          url={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />,
    </div>
  );
};
