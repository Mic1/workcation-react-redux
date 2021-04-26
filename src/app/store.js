import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import locationsReducer from "../features/locations/locationsSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		locations: locationsReducer,
	},
});
