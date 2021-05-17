import React, { useState } from "react";

import StarRatings from "./widgets/StarRatings";

const PropertyCard = (props) => {
	const [collapse, setCollapse] = useState(false);
	const [showDetail, setShowDetail] = useState(false);

	const { property } = props;

	const toggleCollapse = () => {
		console.log("collapse: ", collapse);
		setCollapse(!collapse);
	};

	const toggleShowDetail = () => {
		console.log("toggleShowDetail: ", collapse);
		setShowDetail(!showDetail);
	};

	const formattedPrice = (price) => {
		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		});

		return formatter.format(property.price / 100);
	};

	return (
		<div>
			<div className={`relative pb-5/6`}>
				<img
					className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
					src={property.imageUrl}
					alt="pic"
				/>
			</div>
			<div className={`relative px-4 ${collapse ? "mt-4" : "-mt-16"}`}>
				<div
					className={`bg-white rounded-lg px-4 pt-2 pb-4 shadow-lg ${
						showDetail ? "hidden" : null
					}`}
				>
					<header className="flex justify-end">
						<div className="flex">
							<button onClick={toggleShowDetail}>
								<svg
									className={`w-5 h-5 text-teal-500 ${
										collapse ? "hidden" : null
									} `}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
									></path>
								</svg>
							</button>
							<button onClick={toggleCollapse}>
								<svg
									className={`w-5 h-5 text-teal-500 ${
										collapse ? null : "hidden"
									}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M16 17l-4 4m0 0l-4-4m4 4V3"
									></path>
								</svg>
								<svg
									className={`w-5 h-5 text-teal-500 ${
										collapse ? "hidden" : null
									}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8 7l4-4m0 0l4 4m-4-4v18"
									></path>
								</svg>
							</button>
						</div>
					</header>
					<div className={`flex items-baseline ${collapse ? "hidden" : null}`}>
						<span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">
							Plus
						</span>
						<div
							className={`ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide ${
								collapse ? "hidden" : null
							}`}
						>
							{property.beds} {property.beds === 1 ? "bed" : "beds"} &bull;{" "}
							{property.baths} {property.baths === 1 ? "bath" : "baths"}
						</div>
					</div>
					<h4 className="mt-1 text-gray-900 font-semibold text-lg">
						{property.title}
					</h4>
					<div className={`mt-1 ${collapse ? "hidden" : null}`}>
						<span className="text-gray-900">
							{formattedPrice(property.price)}
						</span>
						<span className="ml-1 text-sm text-gray-600">/wk</span>
					</div>
					<StarRatings
						collapse={collapse}
						numStars="5"
						rating={property.rating}
						starColor="text-teal-500"
						starSize="5"
						reviewNum={property.reviewCount}
						category="Overall"
					/>
				</div>
				<div
					className={`bg-white rounded-lg px-4 pt-2 pb-4 shadow-lg ${
						showDetail ? null : "hidden"
					}`}
				>
					<header className="flex justify-end">
						<div className="flex">
							<button onClick={toggleShowDetail}>
								<svg
									className={`w-5 h-5" text-teal-500 `}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
									></path>
								</svg>
							</button>
							{/* <button onClick={toggleCollapse}>
							<svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>
							</button> */}
						</div>
					</header>

					<StarRatings
						numStars="5"
						rating={property.rating}
						starColor="text-teal-500"
						starSize="5"
						reviewNum={property.reviewCount}
						category="Overall"
					/>
					<StarRatings
						numStars="5"
						rating={property.rating}
						starColor="text-blue-500"
						starSize="4"
						reviewNum={property.reviewCount}
						category="Value"
					/>
					<StarRatings
						numStars="5"
						rating={property.rating}
						starColor="text-yellow-500"
						starSize="4"
						reviewNum={property.reviewCount}
						category="Location"
					/>
					<StarRatings
						numStars="5"
						rating={property.rating}
						starColor="text-red-200"
						starSize="4"
						reviewNum={property.reviewCount}
						category="Amenities"
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
