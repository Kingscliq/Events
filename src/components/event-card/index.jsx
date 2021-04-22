import React from "react";
import "./event-card.css";

const EventCard = ({ className, imagesrc, style }) => {
	return (
		<>
			<div className={className} style={style}>
				<img src={imagesrc} className="card-img" alt="card pic" />
			</div>
		</>
	);
};

export { EventCard };
