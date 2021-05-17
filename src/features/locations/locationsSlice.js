import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL, HTTP_STATUS } from "../../app/constants";

const namespace = "locations";

export const fetchLocationsData = createAsyncThunk(
	`${namespace}/fetchLocationsData`,
	async () => {
		const { data } = await axios.get(`${API_URL}/locations.json`);
		return data;
	}
);

export const locationsSlice = createSlice({
	name: namespace,
	initialState: {
		loading: null,
		data: null,
		dataObj: {
			title: "title",
			description: "description",
			details: "properties",
		},
		configObj: {
			bgOpacity: "bg-opacity-75",
		},
	},
	reducers: {},
	extraReducers: {
		[fetchLocationsData.pending]: (state, action) => {
			state.loading = HTTP_STATUS.PENDING;
		},
		[fetchLocationsData.fulfilled]: (state, { payload }) => {
			state.loading = HTTP_STATUS.FULFILLED;
			state.data = payload;
		},
		[fetchLocationsData.rejected]: (state, action) => {
			console.log("state: ", state);
			state.loading = HTTP_STATUS.REJECTED;
		},
	},
});

export default locationsSlice.reducer;
