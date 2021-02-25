import React, {useEffect, useState} from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ACTIONS } from "../actions";

import PropertyCard from "./PropertyCard";
import Message from "./widgets/Message";
import { fetchLocationData } from '../utils';

function useLoadLocationData() {
  const [stateAPIStatus, setAPIStatus] = useState('idle');
  const dispatch = useDispatch();

  useEffect(() => {
    setAPIStatus('loading');
    fetchLocationData()
      .then((data) => {
        dispatch({
          type: ACTIONS.LOAD_LOCATIONS,
          payload: {
            locationData: data,
          },
        });
        setAPIStatus('success');
      })
      .catch((error) => {
        setAPIStatus('error');
      });
  }, [dispatch]);

  return stateAPIStatus;
}

function selectorLocations(state) {
  const { locations } = state; 
  return locations;
}

const LocationsPage = () => {
	// const locations = useSelector((state) => state.locations)
	const locations = useSelector(selectorLocations, shallowEqual);

	const stateAPIStatus = useLoadLocationData();

	return (			
		<React.Fragment>
			<Message status={stateAPIStatus} />
			{stateAPIStatus === 'success' && (
				<main className="py-6 xl:flex-1 xl:overflow-x-hidden">
					{locations.locations.locationData.map((location, i) => {
						return (
							<div key={i} className="{'mt-6': i > 0}">
								<div className="px-4 xl:px-8">
									<h3 className="text-gray-900 text-xl">{location.title}</h3>
									<p className="text-gray-600">{location.description}</p>
								</div>
								<div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
									<div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
										{location.properties.map((property, i) => {
											return (
												<div
													key={i}
													className={` ${
														i > 0 ? "mt-10 sm:ml-4" : null
													} sm:mt-0 sm:w-80 sm:flex-shrink-0`}
												>
													<PropertyCard property={property} />
												</div>
											);
										})}
									</div>
								</div>
							</div>
						);
					})}
				</main>
				)}
		</React.Fragment>		
	);
};

export default LocationsPage;