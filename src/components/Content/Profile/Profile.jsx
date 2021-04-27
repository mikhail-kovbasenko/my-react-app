import PostsContainer from './Posts/PostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
	return (
		<div className={style.profile}>
			<div className={style.profile_content}>
				<ProfileInfo {...props.profile} 
								 status={props.status}
								 updateStatus={props.updateUserStatus}/>
				<PostsContainer/>
			</div>
		</div>
	)
}

export default Profile;