import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { Button } from "../../../components/button";
import "./email-verify.css";

const EmailVerify = () => {
  return (
    <div className="email-verify-container">
      <div className="verify-box">
        <div>
          <FaEnvelopeOpen size="50" />
        </div>
        <h4>Welcome to Events</h4>
        <div className="line"></div>
        <div>
          <h1>Verify Your Email Address</h1>
          <p>
            Please verify your email address to continue your journey into
            creating amazing Events
          </p>
          <Button text="Verify" className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
