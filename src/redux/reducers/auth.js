import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";
import { SET_USER_DATA } from "../../commons/types";

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: null
}

const auth = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data
			}
		};
		default: return state;
	}
}

const setUserData = (userId, login, email, isAuth) => {
	return {
		type: SET_USER_DATA,
		data: {
			userId,
			login,
			email,
			isAuth
		}
	}
}

export const getAuthUserData = () => {
	return dispatch => {
		authAPI.me().then(response => {
			if(response.data.resultCode === 0) {
				let {id, login, email} = response.data.data;
				dispatch(setUserData(id, login, email, true));
			}
		})
	}
}

export const logIn = (email, password, rememberMe) => {
	return dispatch => {
		authAPI.logIn(email, password, rememberMe).then(response => {
			if(response.data.resultCode === 0) {
				dispatch(getAuthUserData());
			} else {
				const message = response.data.messages.length > 0 
									? response.data.messages[0]
									: 'Some Error';
				dispatch(stopSubmit('login', {_error: message}));
			}
		})
	}
}

export const logOut = () => {
	return dispatch => {
		authAPI.logOut().then(response => {
			if(response.data.resultCode === 0) {
				dispatch(setUserData(null, null, null, false))
			}
		})	
	}
}

export default auth;