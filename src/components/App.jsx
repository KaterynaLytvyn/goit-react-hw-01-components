import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from './TransactionHistory';
import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" 
        stats={data} 
      />
      <FriendList 
        friends={friends} 
      />;      
      <TransactionHistory 
        items={transactions} 
      />;
    </div>
    
  );
};
