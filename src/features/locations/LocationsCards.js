import React from "react";
import { useSelector } from "react-redux";

import PropertyCard from "../../components/PropertyCard";

const LocationsCards = () => {
	const data = useSelector((state) => state.locations.data);

	return (
		<main className="py-6 xl:flex-1 xl:overflow-x-hidden">
			{data.map((location, i) => {
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
	);
};

export default LocationsCards;
