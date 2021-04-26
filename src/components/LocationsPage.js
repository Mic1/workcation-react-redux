import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchLocationsData } from "../features/locations/locationsSlice";
import { selectLoadingStatus } from "../features/locations/selectors";
import { HTTP_STATUS } from "../app/constants";
import LocationsCards from "../features/locations/LocationsCards";
import Message from "./widgets/Message";

const LocationsPage = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoadingStatus);

	useEffect(() => {
		dispatch(fetchLocationsData());
	}, []);

	return (
		<React.Fragment>
			{loading === HTTP_STATUS.PENDING && <Message status="loading..." />}
			{loading === HTTP_STATUS.REJECTED && <Message status="error" />}
			{loading === HTTP_STATUS.FULFILLED && <LocationsCards />}
		</React.Fragment>
	);
};

export default LocationsPage;
