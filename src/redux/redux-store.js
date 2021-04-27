import { applyMiddleware, combineReducers, createStore } from "redux";
import sidebar from "./reducers/sidebar";
import {reducer as formReducer} from 'redux-form';
import profile from "./reducers/profile";
import friends from "./reducers/friends";
import auth from "./reducers/auth";
import messages from './reducers/messages';
import app from './reducers/app';
import thunk from "redux-thunk";

const reducers = combineReducers({
	sidebar,
	profile,
	friends,
	auth,
	messages,
	app,
	form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;