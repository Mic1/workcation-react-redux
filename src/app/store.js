import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import locationsReducer from "../features/locations/locationsSlice";
import usersReducer from "../features/users/usersSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		locations: locationsReducer,
		users: usersReducer,
	},
});
