import React from "react";
import GoogleAuth from "../../components/GoogleAuth";
import { Link } from "react-router-dom";

const GoogleDrop = () => {
	return (
		<div
			id="drop"
			className="mt-3 bg-white xl:border rounded-lg w-48 py-2 shadow-xl"
		>
			<a
				href="#account"
				className="block hover:text-white  text-gray-800 px-4 py-2 hover:bg-indigo-500"
			>
				Account settings
			</a>
			<a
				href="#support"
				className="block hover:text-white  text-gray-800 px-4 py-2 hover:bg-indigo-500"
			>
				Support
			</a>
			{/* <a href="#sign-in " className="block hover:text-white  text-gray-800 px-4 py-2 hover:bg-indigo-500">Sign in</a> */}
			<GoogleAuth className="block hover:text-white  text-gray-800 px-4 py-2 hover:bg-indigo-500" />
		</div>
	);
};

export default GoogleDrop;
