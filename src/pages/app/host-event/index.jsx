import React, { useState } from "react";
import { NavBar } from "../../../widgets/nav-bar";
import { AboutDesign } from "./about-design";
import { AboutEvent } from "./about-event";
import { AboutGuests } from "./about-guests";
import "./host-event.css";
import { UploadTemplate } from "./upload-template";

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
			case 4:
				return <UploadTemplate nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} event={event} />;
			default:
				return "stuff";
		}
	};

	const [event, setEvent] = useState({
		image: "",
	});

	const handleChange = (event) => {
		if (event.target.files) {
			let currentImg = event.target.name;
			setEvent({ ...event, [currentImg]: event.target.files[0] });
			console.log(event);
		} else {
			let currentInput = event.target.name;
			setEvent({ ...event, [currentInput]: event.target.value });
			// setPassword({ ...password, [currentInput]: event.target.value });
			console.log(event);
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
