import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';

const Messages = ({users, chats}) => {
	const getUsers = users.map(user => {
		return (
			<div className={style.messages_user} key={user.id}>
				<NavLink to={'/messages/' + user.id} activeClassName={style.active}>{user.name}</NavLink>
			</div>
		)
	})
	return (
		<div className={style.messages}>
			<div className={style.messages_content}>
				<div className={style.messages_users}>{getUsers}</div>
				<div className={style.messages_chats}></div>
			</div>
		</div>
	)
}

export default Messages;