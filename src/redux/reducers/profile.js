import { profileAPI, usersAPI } from "../../api/api";
import { ADD_POST, REMOVE_POST, SET_STATUS, SET_USER_PROFILE } from "../../commons/types";

const initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likeCount: 14},
		{id: 2, message: 'It\'s my first post!', likeCount: 30}
	],
	status: '',
	profile: null
}

const profile = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST: {
			const post = {
				id: state.posts.length + 1,
				message: action.data.text,
				likeCount: 0
			}
			return {
				...state,
				posts: [...state.posts, post]
			}
		};
		case REMOVE_POST: {
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.data.id)
			}
		};
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.data.profile
			}
		};
		case SET_STATUS: {
			return {
				...state,
				status: action.data.status
			}
		};
		default: return state;
	}
}
/* ActionCreators*/
export const addPostActionCreator = text => {
	return {
		type: ADD_POST,
		data: {
			text
		}
	}
}
export const removePostActionCreator = id => {
	return {
		type: REMOVE_POST,
		data: {
			id
		}
	}
}
const setUserProfile = profile => {
	return {
		type: SET_USER_PROFILE,
		data: {
			profile
		}
	}
}
const setStatus = status => {
	return {
		type: SET_STATUS,
		data: {
			status
		}
	}
}
/*Thunks*/
export const getUserProfile = userId => {
	return dispatch => {
		profileAPI.getProfile(userId).then(response => {
			dispatch(setUserProfile(response.data));
		})
	}
}
export const getUserStatus = userId => {
	return dispatch => {
		profileAPI.getStatus(userId).then(response => {
			dispatch(setStatus(response.data));
		})
	}
}
export const updateUserStatus = status => {
	return dispatch => {
		profileAPI.updateStatus(status).then(response => {
			if(response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		})
	}
}

export default profile;