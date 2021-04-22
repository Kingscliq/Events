import React from "react";
import "./button.css";

const Button = ({ type, className, style, text, handleClick, ...props }) => {
	return (
		<button type={type} className={className} style={style} onClick={handleClick}>
			{text}
		</button>
	);
};

export { Button };
