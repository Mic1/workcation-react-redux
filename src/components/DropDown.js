import React, { useState, useEffect } from "react";

import Trigger from "./widgets/Trigger";
import GoogleDrop from "./widgets/GoogleDrop";

const DropDown = () => {
	// eslint-disable-next-line no-unused-vars
	const [buttonHasFocus, setButtonHasFocus] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.addEventListener("keydown", onEscape);
		return () => document.removeEventListener("keydown", onEscape);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onEscape = (e) => {
		if (!isOpen || e.key !== "Esc" || e.key !== "Escape") {
			return;
		}
		setIsOpen(false);
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative hidden sm:block">
			<button
				onClick={toggle}
				type="button"
				className="block focus:outline-none"
				onFocus={() => {
					setButtonHasFocus(true);
				}}
				onBlur={() => {
					setButtonHasFocus(false);
				}}
			>
				<Trigger hasFocus={buttonHasFocus} isOpen={isOpen} />
			</button>
			<div className={isOpen ? "block" : "hidden"}>
				<button
					onClick={() => {
						setIsOpen(false);
					}}
					type="button"
					className="z-30 block fixed inset-0 w-full h-full cursor-default"
				></button>
				<div className="absolute z-40 right-0">
					<GoogleDrop />
				</div>
			</div>
		</div>
	);
};

export default DropDown;
