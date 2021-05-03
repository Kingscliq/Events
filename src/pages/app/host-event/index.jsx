import React from "react";
import { CalendarIcon, ClockIcon } from "../../../assets/images";
import { Button } from "../../../components/button";
import { NavBar } from "../../../widgets/nav-bar";
import "./host-event.css";

const HostEvent = () => {
	return (
		<>
			<NavBar firstItem={"Browse an event"} firstLink={"/browse-events"} secondItem={"Sign In"} secondLink={"/signin"} />
			<main className="host-event">
				<section className="container">
					<h1> Welcome! </h1>
					<div className="host-event-page host-event-first-page">
						<div className="host-event-guide">
							<h1> About your event</h1>
							<p>Tell us a little bit about your event type lets understand some basic information about it.</p>
							<span className="progress">Step 1 of 3: About event</span>
							<div className="progress-bar"></div>
						</div>
						<div className="host-event-form-container">
							<form action="">
								<div className="form-input-div">
									<span>
										<img src={CalendarIcon} alt="calendar icon" />
									</span>
									<div className="form-input">
										<h2>What type of event are you hosting?</h2>
										<input type="text" placeholder="Event type" />
									</div>
								</div>
								<div className="form-input-div">
									<span>
										<img src={ClockIcon} alt="clock icon" />
									</span>
									<div className="form-input">
										<h2>Is this a reoccuring event?</h2>
										<input type="text" placeholder="Monthly, yearly?" />
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="host-event-buttons">
						<Button text={"Skip"} className="btn btn-dark" />
						<Button text={"Next"} className="btn btn-primary" />
					</div>
				</section>
			</main>
		</>
	);
};

export { HostEvent };
