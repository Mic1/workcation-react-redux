import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL, HTTP_STATUS } from "../../app/constants";

const namespace = "users";

export const fetchUsersData = createAsyncThunk(
	`${namespace}/fetchUsersData`,
	async () => {
		const { data } = await axios.get(`${API_URL}/users.json`);
		return data;
	}
);

export const usersSlice = createSlice({
	name: namespace,
	initialState: {
		loading: null,
		data: null,
		dataObj: {
			title: "title",
			description: "description",
			details: "robots",
		},
		configObj: {
			bgOpacity: "bg-opacity-25",
		},
	},
	reducers: {},
	extraReducers: {
		[fetchUsersData.pending]: (state, action) => {
			state.loading = HTTP_STATUS.PENDING;
		},
		[fetchUsersData.fulfilled]: (state, { payload }) => {
			state.loading = HTTP_STATUS.FULFILLED;
			state.data = payload;
		},
		[fetchUsersData.rejected]: (state, action) => {
			console.log("state: ", state);
			state.loading = HTTP_STATUS.REJECTED;
		},
	},
});

export default usersSlice.reducer;
