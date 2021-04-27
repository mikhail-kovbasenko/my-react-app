import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {getUserProfile, getUserStatus, updateUserStatus} from './../../../redux/reducers/profile';
import Profile from './Profile';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;

		if(!userId) {
			userId = this.props.authorizedUserId;
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}
	render() {
		return (
			<Profile {...this.props}/>
		)
	}
}

const mapStateToProps = state => {
	return {
		status: state.profile.status,
		profile: state.profile.profile,
		authorizedUserId: state.auth.userId,
	}
}

export default compose(
	connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
	withRouter,
	WithAuthRedirect,
)(ProfileContainer)