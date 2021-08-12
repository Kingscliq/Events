import { Formik, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Input } from "../../../components/input";
import { NavBar } from "../../../widgets/nav-bar";
import * as Yup from "yup";
import { lightLoader, Loader } from "../../../assets/images";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaUserAlt,
  FaEyeSlash,
  FaGoogle,
  FaUser,
} from "react-icons/fa";
import { Button } from "../../../components/button";
import "../login/login.css";
import { EventChairs } from "../../../assets/images";
import { Footer } from "../../../widgets/footer";
import FormInput from "../../../components/form-input";
import { register } from "../../../store/actions/index";
import { connect } from "react-redux";

const SignUp = ({ user, loading, showVerificationNotice }) => {
  const initialFormState = { first_name: "", email: "", password: "" };
  const [eye, setEye] = useState(false);
  const handleEyeToggle = e => {
    setEye(prevState => !prevState);
  };

  const history = useHistory();

  useEffect(() => {
    if (showVerificationNotice) {
      // console.log(showVerificationNotice)
      history.push("/verify-email");
    }
  }, [showVerificationNotice]);
  return (
    <>
      <NavBar
        firstItem={"Home"}
        firstLink={"/"}
        secondItem={"Events"}
        secondLink={"/browse-events"}
        profile={user ? `${user.first_name}` : null}
        profileIcon={user ? <FaUser /> : null}
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
            onSubmit={data => {
              register(data);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
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
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaUserAlt />}
                    placeholder="Enter Firstname"
                    value={values.first_name}
                    onChange={handleChange}
                    name="first_name"
                  />
                  <ErrorMessage name="first_name">
                    {msg => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaEnvelope />}
                    placeholder="Enter Email"
                    values={values.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <ErrorMessage name="email">
                    {msg => <div style={{ color: "red" }}>{msg}</div>}
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
                  />
                  <ErrorMessage name="first_name">
                    {msg => (
                      <div style={{ color: "red", marginBottom: "10px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                  <Button
                    text={
                      loading ? (
                        <img src={lightLoader} width="50" height="50" />
                      ) : (
                        "Sign Up"
                      )
                    }
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading ? "disabled" : false}
                  />
                  <p className="form-para">
                    <input type="checkbox" />
                    &nbsp;&nbsp; <span>Save Password</span>
                  </p>
                  <div style={{ textAlign: "center" }}>Or</div>
                  <Button
                    text={"Sign Up With Google"}
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

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  showVerificationNotice: state.auth.showVerificationNotice,
});
export default connect(mapStateToProps, { register })(SignUp);
