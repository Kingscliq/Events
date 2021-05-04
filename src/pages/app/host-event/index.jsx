import React, { useState } from "react";
import { NavBar } from "../../../widgets/nav-bar";
import { AboutDesign } from "./about-design";
import { AboutEvent } from "./about-event";
import { AboutGuests } from "./about-guests";
import "./host-event.css";

const HostEvent = () => {
	const [step, setStep] = useState(1);

	// Proceed to next step
	const nextStep = () => {
		setStep(step + 1);
		console.log(step);
	};

	// Go back to prev step
	const prevStep = () => {
		setStep(step - 1);
		console.log(step);
	};

	const renderSwitch = (step) => {
		switch (step) {
			case 1:
				return <AboutEvent nextStep={nextStep} />;
			case 2:
				return <AboutGuests nextStep={nextStep} prevStep={prevStep} />;
			case 3:
				return <AboutDesign nextStep={nextStep} prevStep={prevStep} />;
			default:
				return "stuff";
		}
	};

	return (
		<>
			<NavBar firstItem={"Browse an event"} firstLink={"/browse-events"} secondItem={"Sign In"} secondLink={"/signin"} />
			<div>{renderSwitch(step)}</div>
		</>
	);
};

export { HostEvent };
