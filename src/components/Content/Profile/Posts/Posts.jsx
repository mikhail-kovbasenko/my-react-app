import style from './../Profile.module.css';
import Post from './Post/Post';
import PostForm from './PostForm';

const Posts = props => {
	const addPost = formData => {
		props.addPost(formData.text);
		formData.text = '';
	}
	const removePost = id => {
		props.removePost(id);
	}
	const getPosts = props.items.map(item => {
		return <Post {...item} key={item.id} removePost={removePost}/>
	})
	return (
		<div className={style.profile_posts}>
			<div className={style.profile_posts_form}>
				<PostForm onSubmit={addPost}/>
			</div>
			<div className={style.profile_posts_content}>
				<div className={style.profile_posts_items}>
					{getPosts}
				</div>
			</div>
		</div>
	)
}

export default Posts;