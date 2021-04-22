import React from "react";

const Input = ({ type, placeholder, style, className, icon, handleChange, ...props }) => {
	return (
		<div className="input" style={style}>
			<span className="icon">{icon}</span>
			<input type={type} placeholder={placeholder} style={style} className={className} onChange={handleChange}></input>
		</div>
	);
};
export { Input };
