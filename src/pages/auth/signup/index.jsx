import { Formik } from "formik";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { Input } from "../../../components/input";
import { NavBar } from "../../../widgets/nav-bar";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaUserAlt,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { Button } from "../../../components/button";
import "../login/login.css";
import { EventChairs } from "../../../assets/images";
import { Footer } from "../../../widgets/footer";
import FormInput from "../../../components/form-input";

const SignUp = () => {
  const initialFormState = { email: "", password: "" };
  const [eye, setEye] = useState(false);
  const handleEyeToggle = (e) => {
    setEye((prevState) => !prevState);
  };


  const history = useHistory()

  return (
    <>
      <NavBar
        firstItem={"Home"}
        firstLink={"/"}
        secondItem={"Events"}
        secondLink={"/browse-events"}
        profileLink={`www.yahoo.com`}
        profile={"Profile"}
        button={<Button text={"Sign In"} className="btn" />}
      />
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
                    <h2>Sign Up</h2>
                  </header>
                  <p className="form-para" style={{ justifyContent: "center" }}>
                    Already Have an Account? &nbsp;
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push("/signin")}
                    >
                      SignIn
                    </span>
                  </p>
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaUserAlt />}
                    placeholder="Enter Username"
                  />
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaEnvelope />}
                    placeholder="Enter Email"
                  />

                  <FormInput
                    type={eye ? "text" : "password"}
                    className="textField"
                    icon={<FaLock />}
                    placeholder="Enter Password"
                    rightIcon={eye ? <FaEye /> : <FaEyeSlash />}
                    handleClick={handleEyeToggle}
                  />
                  <Button
                    text="Sign In"
                    type="submit"
                    className="btn btn-primary"
                  />
                  <p className="form-para">
                    <input type="checkbox" />
                    &nbsp;&nbsp; <span>Save Password</span>
                  </p>
                  <div style={{ textAlign: "center" }}>Or</div>
                  <Button
                    text="Sign Up With Google"
                    type="submit"
                    className="btn btn-light"
                    icon={<FaGoogle />}
                  />
                </form>
              </>
            )}
          </Formik>
        </div>
        <div>
          <img src={EventChairs} className="login-hero" alt="hero" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export { SignUp };
