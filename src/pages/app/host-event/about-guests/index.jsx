import React from "react";
import { PeopleIcon, VideocameraIcon } from "../../../../assets/images";
import { Button } from "../../../../components/button";
import "../host-event.css";

const AboutGuests = ({ nextStep, prevStep }) => {
	return (
		<>
			<main className="host-event">
				<section className="container">
					<div className="host-event-page host-event-first-page">
						<div className="host-event-guide">
							<h1> About your guests</h1>
							<p>Tell us a little bit about your attendees letscover some basic information about your event.</p>
							<span className="progress">Step 2 of 3: About guests</span>
							<div className="progress-bar-two"></div>
						</div>
						<div className="host-event-form-container">
							<form action="">
								<div className="form-input-div">
									<span>
										<img src={VideocameraIcon} alt="videocamera icon" />
									</span>
									<div className="form-input">
										<h2>Is it a physical or virtual meet?</h2>
										<input type="text" placeholder="Online or Physical" />
									</div>
								</div>
								<div className="form-input-div">
									<span>
										<img src={PeopleIcon} alt="people icon" />
									</span>
									<div className="form-input">
										<h2>How many people do you expect?</h2>
										<input type="text" placeholder="Below or above 20" />
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="host-event-buttons">
						<Button text={"Back"} className="btn btn-dark" onClick={prevStep} />
						<Button text={"Next"} className="btn btn-primary" onClick={nextStep} />
					</div>
				</section>
			</main>
		</>
	);
};

export { AboutGuests };
