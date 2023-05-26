import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function CreateFriendListItem(props) {
  return props.array.map(listItem => {
    const statusValue = listItem.isOnline ? css.online : '';
    return (
      <li className={css.item} key={listItem.id}>
        <span className={`${css.status} ${statusValue}`}></span>
        <img
          className={css.avatar}
          src={listItem.avatar}
          alt="User avatar"
          width="100"
        />
        <p className={css.name}>{listItem.name}</p>
      </li>
    );
  });
}

CreateFriendListItem.propTypes = {
  array: PropTypes.array.isRequired,
};
