import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../features/cards/Card";
import CardContainer from "../features/cards/CardContainer";
import Message from "../components/widgets/Message";

import { fetchUsersData } from "../features/users/usersSlice";
import {
	selectLoadingStatus,
	userData,
	dataObj,
	configObj,
} from "../features/users/selectors";

import { HTTP_STATUS } from "../app/constants";
// import LocationsCards from "../features/locations/LocationsCards";

const UsersPage = () => {
	const dispatch = useDispatch();
	const dataObjSel = useSelector(dataObj);
	const configObjSel = useSelector(configObj);
	const loading = useSelector(selectLoadingStatus);
	const data = useSelector(userData);

	useEffect(() => {
		dispatch(fetchUsersData());
	}, [dispatch]);

	return (
		<React.Fragment>
			{loading === HTTP_STATUS.PENDING && <Message status="loading..." />}
			{loading === HTTP_STATUS.REJECTED && <Message status="error" />}
			{loading === HTTP_STATUS.FULFILLED && (
				<CardContainer data={data} dataObj={dataObjSel}>
					<Card bgOpacity={configObjSel.bgOpacity} />
				</CardContainer>
			)}
		</React.Fragment>
	);
};

export default UsersPage;
