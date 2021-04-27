import { NavLink } from 'react-router-dom';
import style from './../Friends.module.css';
import defaultAvatar from './avatar.png';

const Friend = props => {
	const avatar = props.photos.small !== null ? props.photos.small : defaultAvatar;
	const followUser = id => {
		//debugger;
		props.follow(id);
	}
	const unFollowUser = id => {
		props.unfollow(id);
	}
	const followInProgressClass = props.followingInProgress.some(id => id === props.userId)
									? style.disabled
									: null;
	return (
		<div className={style.friend_item}>
			<div className={style.friend_item_container}>
				<div className={style.friend_item_avatar}>
					<NavLink to={'/profile/' + props.userId}>
						<img src={avatar} alt=""/>
					</NavLink>
				</div>
				<div className={style.friend_item_info}>
					<div className={style.friend_item_name}>
						{props.name}
					</div>
					<div className={style.friend_item_status}>
						{props.status || 'none'}
					</div>
				</div>
				<div className={style.friend_item_button}>
					<div className={style.friend_button}>
						{
							props.followed 
							? <button className={`unfollow ${followInProgressClass}`} onClick={unFollowUser.bind(null, props.userId)}>Unfollow</button>
							: <button className={`follow ${followInProgressClass}`} onClick={followUser.bind(null, props.userId)}>Follow</button>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Friend;