import { usersAPI } from "../../api/api";
import { FOLLOW_SUCCESS, SET_CURRENT_PAGE, SET_TOTAL_COUNT, SET_USERS, TOGGLE_FOLLOWING_PROGRESS, TOGGLE_IS_FETCHING, UNFOLLOW_SUCCESS } from "../../commons/types";

const initalState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: null,
	followingInProgress: []
}

const setFollowStatusByUserId = (users, id, bool) => {
	return users.map(user => {
		if(user.id === id) {
			return {...user, followed: bool}
		}
		return user;
	})
}

const friends = (state = initalState, action) => {
	switch (action.type) {
		case SET_USERS: {
			return {
				...state,
				users: action.data.users
			}
		};
		case SET_TOTAL_COUNT: {
			return {
				...state,
				totalUsersCount: action.data.count
			}
		};
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.data.isFetching
			}
		};
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.data.pageNum
			}
		};
		case FOLLOW_SUCCESS: {
		
			return {
				...state,
				users: setFollowStatusByUserId(state.users, action.data.userId, true)
			}
		};
		case UNFOLLOW_SUCCESS: {
			return {
				...state,
				users: setFollowStatusByUserId(state.users, action.data.userId, false)
			}
		};
		case TOGGLE_FOLLOWING_PROGRESS: {
			const followingInProgress = action.data.isFetching 
												? [...state.followingInProgress, action.data.userId]
												: state.followingInProgress.filter(id => id !== action.data.userId);
			return {
				...state,
				followingInProgress,
			}
		};
		default: return state;
	}
}

const toggleIsFetching = isFetching => {
	return {
		type: TOGGLE_IS_FETCHING,
		data: {
			isFetching
		}
	}
}
const setUsers = users => {
	return {
		type: SET_USERS,
		data: {
			users
		}
	}
}
const setTotalCount = count => {
	return {
		type: SET_TOTAL_COUNT,
		data: {
			count
		}
	}
}
const setCurrentPage = pageNum => {
	return {
		type: SET_CURRENT_PAGE,
		data: {
			pageNum
		}
	}
}
const followSuccess = userId => {
	return {
		type: FOLLOW_SUCCESS,
		data: {
			userId
		}
	}
}
const unFollowSuccess = userId => {
	return {
		type: UNFOLLOW_SUCCESS,
		data: {
			userId
		}
	}
}
const toggleFollowingProgress = (isFetching, userId) => {
	return {
		type: TOGGLE_FOLLOWING_PROGRESS,
		data: {
			isFetching,
			userId
		}
	}
}

export const getUsers = (currentPage, pageSize) => {
	return dispatch => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(currentPage));

		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items))
			dispatch(setTotalCount(data.totalCount));
		})
	}
}
export const followUser = userId => {
	return dispatch => {
		dispatch(toggleFollowingProgress(true, userId));

		usersAPI.followUser(userId).then(response => {
			if(response.data.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		})
	}
}
export const unFollowUser = userId => {
	return dispatch => {
		dispatch(toggleFollowingProgress(true, userId));

		usersAPI.unFollowUser(userId).then(response => {
			if(response.data.resultCode === 0) {
				dispatch(unFollowSuccess(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		})
	}
}

export default friends;