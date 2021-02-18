import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

import { ACTIONS } from './redux';

import SearchFiltersVue from "./components/SearchFilters";
import SiteHeader from "./components/SiteHeader";
import PropertyCard from "./components/PropertyCard";
import Message from "./components/widgets/Message";

import { loadLocationData } from './utils';

function useLoadLocationData() {
  const [stateAPIStatus, setAPIStatus] = useState('idle');
  const dispatch = useDispatch();

  useEffect(() => {
    setAPIStatus('loading');
    loadLocationData()
      .then((data) => {
        dispatch({
          type: ACTIONS.LOAD_LOCATION,
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


const App = () => {
	const locations = useSelector((state) => state.locations)
	const stateAPIStatus = useLoadLocationData();

	return (			
		<div className=" min-h-screen bg-gray-200 antialiased  xl:flex xl:flex-col xl:h-screen">
			<SiteHeader className="xl:flex-shrink-0" />
			<div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
				<SearchFiltersVue />

					<Message status={stateAPIStatus} />
					{stateAPIStatus === 'success' && (
					<main className="py-6 xl:flex-1 xl:overflow-x-hidden">
						{locations.map((location, i) => {
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
			</div>
		</div>
	);
};

export default App;
