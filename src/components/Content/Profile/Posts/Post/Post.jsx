import style from './../../Profile.module.css';
import avatar from './../../ProfileInfo/avatar.png';

const Post = props => {
	const onClickOnSpan = id => {
		props.removePost(id);
	}
	return (
		<div className={style.profile_posts_item}>
			<div className={style.profile_posts_avatar}>
				<img src={avatar}/>
			</div>
			<div className={style.profile_posts_item_data}>
				<div>{props.message}</div>
				<div>Likes:{props.likeCount}</div>
			</div>
			<div className={style.profile_posts_item_remove} onClick={() => onClickOnSpan(props.id)}>
				<span>&times;</span>
			</div>
		</div>
	)
}

export default Post;