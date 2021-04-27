import { SET_INITIALIZED_APP } from "../../commons/types";
import { getAuthUserData } from "./auth";

const initialState = {
	initialized: false
}

const app = (state = initialState, action) => 	{
	switch(action.type) {
		case SET_INITIALIZED_APP: {
			return {
				...state,
				initialized: true
			}
		}
		default: return state;
	}
}

const setInitializedApp = () => {
	return {
		type: SET_INITIALIZED_APP
	}
}

export const initializeApp = () => {
	return dispatch  => {
		Promise.all([dispatch(getAuthUserData())])
			.then(() => {
				dispatch(setInitializedApp());
			})
	}
}

export default app;