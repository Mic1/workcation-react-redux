import React, {useState, useEffect} from "react";

const DropDown = ({ trigger, dropdown }) => {
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

	/* const focus = () => {
		setButtonHasFocus(true);
	}; */

	/* const blur = () => {
		setButtonHasFocus(false);
	}; */

	return (
		<div className="relative hidden sm:block">
			<button onClick={toggle} type="button" className="block focus:outline-none" onFocus={()=>{setButtonHasFocus(true)}} onBlur={()=>{setButtonHasFocus(false)}}>
				<trigger>{trigger}</trigger>
			</button>
			<div className={isOpen ? 'block' : 'hidden'}>
      	<button onClick={()=>{setIsOpen(false)}} type="button" className="z-30 block fixed inset-0 w-full h-full cursor-default"></button>
					<div className="absolute z-40 right-0">
						<dropdown>{dropdown}</dropdown>
					</div>
			</div>
		</div>
	);
};

export default DropDown;
