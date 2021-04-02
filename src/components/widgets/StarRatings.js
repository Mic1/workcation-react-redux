import React from "react";
// import classNames from "classnames";

const StarRatings = (props) => {
	const { numStars, rating, starColor, starSize, reviewNum, category, collapse } = props;
	// console.log("props:", props);
	const starsMap = () => {
		return Array.from({ length: numStars }).map((value, index) => {
			return (
				<svg
					key={index}
					viewBox="0 0 24 24"
					className={` ${
						index < rating ? starColor : "text-gray-400"
					} h-${starSize} w-${starSize} fill-current`}
				>
					<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
				</svg>
			);
		});
	};

	return (
		<div className={`mt-2 flex items-center ${collapse ? "hidden" : null}`}>
			{starsMap(numStars)}
			<span className="ml-2">{category}</span>

			<span className="ml-2 text-gray-600 text-sm">{reviewNum} reviews</span>
		</div>
	);
};

export default StarRatings;
