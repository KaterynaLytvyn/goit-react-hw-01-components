import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = (props) => {
  const {avatar, name, isOnline} = props;

  

  return (
    <li className={s.container}>
        <span className={`${s.status} ${isOnline?s.status_online:s.status_offline}`}></span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;