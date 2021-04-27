import React from 'react';
import { connect } from 'react-redux';
import { Preloader } from '../../../commons/Preloader/Preloader';
import { getUsers, followUser, unFollowUser } from '../../../redux/reducers/friends';
import Friends from './Friends';
import {WithAuthRedirect} from './../../../hoc/WithAuthRedirect';
import style from './Friends.module.css';
import { compose } from 'redux';
import {getCurrentPage, getAllUsers, getPageSize, getTotalUsersCount, getIsFetching, getFollowingProgress} from './../../../redux/selectors/friends-selectors';

class FriendsContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChange = pageNum => {
		this.props.getUsers(pageNum, this.props.pageSize);
	}
	render() {
		return (
			<div className={style.friends}>
				{
					this.props.isFetching

					? <Preloader/>
					: <Friends totalUsersCount={this.props.totalUsersCount}
								  pageSize={this.props.pageSize}
								  currentPage={this.props.currentPage}
								  users={this.props.users}
								  followingInProgress={this.props.followingInProgress}
								  changePage={this.onPageChange}
								  followUser={this.props.followUser}
								  unFollowUser={this.props.unFollowUser}
								  />
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: getAllUsers(state),
		currentPage: getCurrentPage(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingProgress(state)
	}
}

export default compose(
	connect(mapStateToProps, {
		getUsers,
		followUser,
		unFollowUser,
	}),
	WithAuthRedirect
)(FriendsContainer);
