import React, { useEffect, useState } from 'react';
import style from './../../Profile.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = event => {
		this.setState({
			status: event.currentTarget.value
		})
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}
	render() {
		console.log(this.state);
		return (
			<div className={style.profile_info_status_status}>
				{
					!this.state.editMode
						? <span onDoubleClick={this.activateEditMode}>{this.state.status || '---'}</span>
						: <input className="text-box"
							autoFocus={true}
							value={this.state.status}
							onChange={this.onStatusChange}
							onBlur={this.deactivateEditMode} />
				}
			</div>
		)
	}
}

const ProfileStatusWithHooks = props => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	} 
	const onStatusChange = event => {
		setStatus(event.target.value);
	}
	return (
		<div className={style.profile_info_status_status}>
			{
				!editMode
					? <span onDoubleClick={activateEditMode}>{status || '---'}</span>
					: <input className="text-box"
								autoFocus={true}
								onBlur={deactivateEditMode}
								onChange={onStatusChange}
								value={status}
						/>
			}
		</div>
	)
}

export default ProfileStatusWithHooks;