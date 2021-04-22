import React from "react";
import "./event-card.css";

const EventCard = ({ imagesrc }) => {
	return (
		<>
			<div className="event-card">
				<img src={imagesrc} className="card-img" alt="card pic" />
			</div>
		</>
	);
};

export { EventCard };
