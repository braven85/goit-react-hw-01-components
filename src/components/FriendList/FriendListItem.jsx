import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ isOnline, avatar, name, id }) {
  return (
    <li key={id} className={styles.item}>
      {isOnline === true ? (
        <span className={styles.statusGreen}>{isOnline}</span>
      ) : (
        <span className={styles.statusRed}>{isOnline}</span>
      )}
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default FriendListItem;
