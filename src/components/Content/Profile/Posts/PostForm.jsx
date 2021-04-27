import { Field, reduxForm } from "redux-form";
import style from './../Profile.module.css';

const PostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={style.profile_posts_form}>
				<div className={style.profile_posts_textarea}>
					<Field component={'textarea'} 
							 placeholder={'Enter your message'}
							 name={'text'}
							 className={'text-box'}/>
				</div>
				<div className={style.profile_posts_button}>
					<button className="simple-button">Add</button>
				</div>
			</div>
		</form>
	)
}

export default reduxForm({form: 'post'})(PostForm);