import {
	LOAD_LOCATIONS, SIGN_IN, SIGN_OUT,
} from "./types";

export const ACTIONS = {
  LOAD_LOCATIONS: LOAD_LOCATIONS,
};

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};


