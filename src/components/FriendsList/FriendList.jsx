import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export default function CreateFriendsList(props) {
  return (
    <ul className={css.friendList}>
      <FriendListItem array={props.friendsArr} />
    </ul>
  );
}
