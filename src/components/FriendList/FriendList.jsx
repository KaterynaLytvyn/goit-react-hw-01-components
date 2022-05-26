import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = (props) => {
  const {friends} = props;

  return (
    <ul className={s.container}>
        {friends.map(friend => 
        <FriendListItem 
            key = {friend.id}
            avatar = {friend.avatar}
            name = {friend.name}
            isOnline = {friend.isOnline} 
        />)}
    </ul>
  )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList