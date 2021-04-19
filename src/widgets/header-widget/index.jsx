import React from "react";
import { Button } from "../../components/button";
import "./header-widget.css";

const HeaderWidget = () => {
	return (
		<>
			<div className="main-header-widget">
				<div className="hire-text">
					<p> Are you looking for a designer? </p>
					<p> Hire designers for your events now </p>
				</div>
				<div className="hire-btn">
					<Button text={"Hire now"} />
				</div>
			</div>
		</>
	);
};

export { HeaderWidget };
