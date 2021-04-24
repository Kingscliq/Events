import React from "react";
import "./input.css";

const Input = ({ type, placeholder, style, className, icon, handleChange, rightIcon, handleClick, ...props }) => {
	return (
		<div className="input" style={style}>
			<span className="icon">{icon}</span>
			<input type={type} placeholder={placeholder} style={style} className={className} onChange={handleChange}></input>
			<span className="icon" onClick={handleClick}>
				{rightIcon}
			</span>
		</div>
	);
};
export { Input };
