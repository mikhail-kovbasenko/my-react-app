import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../commons/FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../../utlis/validate";
import {logIn} from './../../../redux/reducers/auth';
import style from './Login.module.css';

const maxLength30 = maxLengthCreator(30);

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={style.login_email}>
				<Field component={Input}
					placeholder={'Email'}
					name={'email'}
					className={'text-box'}
					validate={[required, maxLength30]} />
			</div>
			<div>
				<Field component={Input}
					type={'password'}
					placeholder={'Password'}
					name={'password'}
					className={'text-box'}
					validate={[required, maxLength30]} />
			</div>
			<div className={style.login_rememberMe}>
				<div>Remember me:</div>
				<div>
					<Field component={'input'}
						type={'checkbox'}
						name={'rememberMe'}
					/>
				</div>
			</div>
			{
				props.error && 
				<div className={style.login_summary_error}>
					{props.error}
				</div>
			}
			<div className={style.login_button}>
				<button className="simple-button">Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

const Login = props => {
	const onSubmit = data => {
		props.logIn(data.email, data.password, data.rememberMe);
	}
	if(props.isAuth) {
		return <Redirect to="/profile"/>
	}
	return (
		<div className={style.login}>
			<div className={style.login_title}>Login</div>
			<div className={style.login_content}>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {
	logIn
})(Login)