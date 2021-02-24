import { combineReducers } from "redux";

import locationReducer from "./locationReducer";
import authReducer from "./authReducer";

export default combineReducers({
	locations: locationReducer,	
	auth: authReducer,
});
