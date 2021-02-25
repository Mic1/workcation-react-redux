import React from "react";
import { useSelector } from 'react-redux';

const Trigger = (props) => {
	const {hasFocus, isOpen} = props;
	const isLoggedIn = useSelector(state => state.auth.isSignedIn);

	return (
			<span
				className={`block h-8 w-8 overflow-hidden rounded-full border-2 ${
					hasFocus || isOpen
						? "border-white xl:border-indigo-500"
						: "border-gray-600 xl:border-gray-300"
				}  `}
			>
				{isLoggedIn ?
					<img id="trgr-img"
						className="h-full w-full object-cover"
						src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
						alt=""
					/>
				: <svg className="h-6 w-6 inline-flex items-center fill-current text-white xl:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
					</svg>
				}				
			</span>
	);
};

export default Trigger;