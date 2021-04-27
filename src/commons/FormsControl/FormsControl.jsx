import style from './FormsControl.module.css';

const FormControl = props => {
	const hasError = props.meta.touched && props.meta.error;
	return (
		<div className={style.form_control}>
			<div className={style.form_control_child}>
				{props.children}
			</div>
			{hasError && <span>{props.meta.error}</span>}
		</div>
	)
}

export const Input = props => {
	const {input, ...restProps} = props;

	return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}