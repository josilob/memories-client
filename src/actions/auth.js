import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
	try {
		//login the user
		//navigate to the homepage
		history.push('/');
	} catch (err) {
		console.log(err);
	}
};

export const signup = (formData, history) => async (dispatch) => {
	try {
		//signup the user
		//navigate to the homepage
		history.push('/');
	} catch (err) {
		console.log(err);
	}
};
