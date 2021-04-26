import { createSlice } from "@reduxjs/toolkit";

const namespace = "auth";

export const authSlice = createSlice({
	name: namespace,
	initialState: {
		isSignedIn: null,
		userId: null,
		userName: null,
		userType: null,
	},
	reducers: {
		signIn: (state, { payload }) => {
			state.isSignedIn = true;
			state.userId = payload;
		},
		signOut: (state) => {
			state.isSignedIn = false;
			state.userId = null;
		},
	},
});

/*selectors are embedded in the slice and exported as a group
to be imported into components. Each reusable component/slice combination
has its own selectors.js where available state is easily identifiable but this extra file not worth overhead?*/
const signedIn = (state) => state.auth.signedIn;
const userName = (state) => state.auth.userName;
const userId = (state) => state.auth.userId;

// e.g. google so same slice could be used for multiple login components with common slice api
const userType = (state) => state.auth.userType;

export const authSelectors = { signedIn, userName, userId };

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
