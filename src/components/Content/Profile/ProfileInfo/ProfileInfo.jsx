import { Preloader } from '../../../../commons/Preloader/Preloader';
import style from './../Profile.module.css';
import defaultAvatar from './avatar.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = props => {
	if(Object.keys(props).length <= 2) {
		return <Preloader/>
	}
	console.log(props);
	const avatar = props.photos.small ? props.photos.small : defaultAvatar;

	return (
		<div className={style.profile_info}>
			<div className={style.profile_info_content}>
				<div className={style.profile_info_avatar}>
					<img src={avatar}/>
				</div>
				<div className={style.profile_info_userdata}>
					<div className={style.profile_info_nickname}>
						<span className={style.profile_info_nickname_label}>Nickname:</span>
						<span className={style.profile_info_nickname_name}>{props.fullName}</span>
					</div>
					<div className={style.profile_info_status}>
						<span className={style.profile_info_status_label}>Status:</span>
						<ProfileStatus status={props.status}
											updateStatus={props.updateStatus}
											/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;