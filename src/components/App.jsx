import Profile from './Profile/Profile';
import userData from '../json/user.json';
import Statistics from './Statistics/Statistics';
import statsData from '../json/data.json';
import FriendsList from './FriendsList/FriendList';
import friendsData from '../json/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        gap: 50,
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="UPLOAD STATS" data={statsData} />
      <FriendsList friendsArr={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
