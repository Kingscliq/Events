import { Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../../components/input";
import { NavBar } from "../../../widgets/nav-bar";
import * as Yup from "yup";
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
import { signUp } from "../../../actions/index";
import { connect } from "react-redux";

const SignUp = (props) => {
  const initialFormState = { first_name: "", email: "", password: "" };
  const [eye, setEye] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const handleEyeToggle = (e) => {
    setEye((prevState) => !prevState);
  };

  const history = useHistory();

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
            // Initialise Initial Form Values
            initialValues={initialFormState}
            // Function for Error message Display
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Please enter a valid email")
                .required("You have to enter an email"),
              password: Yup.string().required("Please enter your password"),
              first_name: Yup.string().required("Please enter your First Name"),
            })}
            // Submit Function
            onSubmit={(data) => {
              props.signUp(data);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <>
                <form className="card" onSubmit={handleSubmit}>
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
                  {props.regSuccess ? (
                    <div className="alert alert-success">
                      {props.regSuccessMsg}
                    </div>
                  ) : null}
                  {props.regFailed ? (
                    <div className="alert alert-danger">
                      {props.regFailedMsg}
                    </div>
                  ) : null}
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaUserAlt />}
                    placeholder="Enter Firstname"
                    value={values.first_name}
                    onChange={handleChange}
                    name="first_name"
                    onBlur={() => setFirstNameFocus(false)}
                    onFocus={() => setFirstNameFocus(true)}
                    inputStyle={{
                      transition: "box-shadow .3s ease-in-out",
                      boxShadow: firstNameFocus
                        ? "0 1px 6px rgb(32 33 36 / 28%)"
                        : "none",
                      borderColor: firstNameFocus
                        ? "rgba(223,225,229,0)"
                        : errors.first_name && touched.first_name
                        ? "red"
                        : "#dfe1e5",
                    }}
                  />
                  <ErrorMessage name="first_name">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaEnvelope />}
                    placeholder="Enter Email"
                    values={values.email}
                    onChange={handleChange}
                    name="email"
                    onBlur={() => setEmailFocus(false)}
                    onFocus={() => setEmailFocus(true)}
                    inputStyle={{
                      transition: "box-shadow .3s ease-in-out",
                      boxShadow: emailFocus
                        ? "0 1px 6px rgb(32 33 36 / 28%)"
                        : "none",
                      borderColor: emailFocus
                        ? "rgba(223,225,229,0)"
                        : errors.email && touched.email
                        ? "red"
                        : "#dfe1e5",
                    }}
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>

                  <FormInput
                    type={eye ? "text" : "password"}
                    className="textField"
                    icon={<FaLock />}
                    placeholder="Enter Password"
                    rightIcon={eye ? <FaEye /> : <FaEyeSlash />}
                    handleClick={handleEyeToggle}
                    values={values.password}
                    onChange={handleChange}
                    name="password"
                    onBlur={() => setPasswordFocus(false)}
                    onFocus={() => setPasswordFocus(true)}
                    inputStyle={{
                      transition: "box-shadow .3s ease-in-out",
                      boxShadow: passwordFocus
                        ? "0 1px 6px rgb(32 33 36 / 28%)"
                        : "none",
                      borderColor: passwordFocus
                        ? "rgba(223,225,229,0)"
                        : errors.password && touched.password
                        ? "red"
                        : "#dfe1e5",
                    }}
                  />
                  <ErrorMessage name="first_name">
                    {(msg) => (
                      <div style={{ color: "red", marginBottom: "10px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                  <Button
                    text="Sign Up"
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
const mapStateToProps = (state) => {
  return {
    regSuccessMsg: state.user.regSuccessMsg,
    regSuccess: state.user.registrationSuccess,
    regFailed: state.user.registrationFailed,
    regFailedMsg: state.user.regFailedMsg,
  };
};
export default connect(mapStateToProps, { signUp })(SignUp);
