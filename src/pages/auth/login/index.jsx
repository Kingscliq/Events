import { Formik } from "formik";
import React, { useState } from "react";
import { Input } from "../../../components/input";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaUserAlt,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { Button } from "../../../components/button";
import "./login.css";
import { SmilingLady } from "../../../assets/images";
const Login = () => {
  const initialFormState = { email: "", password: "" };

  const [eye, setEye] = useState(false);

  const handleEyeToggle = (e) => {
    setEye((prevState) => !prevState);
  };
  return (
    <>
      <section className="form-container">
        <div className="form-parent">
          <Formik
            initialValues={initialFormState}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {({ values, handleBlur, handleChange, handleSubmit }) => (
              <>
                <form className="card">
                  <header className="form-header">
                    <h2>Sign In</h2>
                  </header>
                  <p className="form-para" style={{ justifyContent: "center" }}>
                    Dont Have an Account ? &nbsp;
                    <span className="text-primary">SignUp</span>
                  </p>
                  <Input
                    type="text"
                    className="textField"
                    icon={<FaEnvelope />}
                    placeholder="Enter Email"
                  />
                  <Input
                    type={eye ? "password" : "text"}
                    className="textField"
                    icon={<FaLock />}
                    placeholder="Enter Password"
                    rightIcon={eye ? <FaEyeSlash /> : <FaEye />}
                    handleClick={handleEyeToggle}
                  />
                  <Button
                    text="Sign In"
                    type="submit"
                    className="btn btn-primary"
                  />
                  <p className="form-para">
                    &nbsp;&nbsp; <span>Forgot Password</span>
                  </p>
                  <div style={{ textAlign: "center" }}>OR</div>
                  <Button
                    text="Sign In With Google"
                    type="submit"
                    className="btn btn-light"
                    icon={<FaGoogle />}
                  />
                </form>
              </>
            )}
          </Formik>
        </div>
        <div className="signup-hero-container">
          <img src={SmilingLady} alt="smiling-lady" className="login-hero" />
        </div>
      </section>
    </>
  );
};

export { Login };
