import { Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Input } from "../../../components/input";
import { NavBar } from "../../../widgets/nav-bar";
import client from "../../../api/api-client";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { Button } from "../../../components/button";
import "./login.css";
import { SmilingLady } from "../../../assets/images";
import { Footer } from "../../../widgets/footer";
import FormInput from "../../../components/form-input";

const Login = () => {
  const initialFormState = { email: "", password: "" };

  //  HAndle Password Visibility
  const [eye, setEye] = useState(false);

  const handleEyeToggle = (e) => {
    setEye((prevState) => !prevState);
  };

  // import UseHistory for Routing
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
            initialValues={initialFormState}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Please enter a valid email")
                .required("You have to enter an email"),
              password: Yup.string().required("Please enter your password"),
            })}
            onSubmit={(data) => {
              client
                .post("/users/login", data)
                .then((res) => {
                  console.log(res.headers);
                })
                .catch((err) => console.log(err));
            }}
          >
            {({ values, handleBlur, handleChange, handleSubmit }) => (
              <>
                <form className="card" onSubmit={handleSubmit}>
                  <header className="form-header">
                    <h2>Sign In</h2>
                  </header>
                  <p className="form-para" style={{ justifyContent: "center" }}>
                    Don't Have an Account ? &nbsp;
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push("/signup")}
                    >
                      SignUp
                    </span>
                  </p>
                  <FormInput
                    type="text"
                    className="textField"
                    handleBlur={handleBlur}
                    icon={<FaEnvelope />}
                    placeholder="Enter Email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
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
                    handleBlur={handleBlur}
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    style={{}}
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <div style={{ color: "red", marginBottom: "20px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
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
      <Footer />
      Form
    </>
  );
};

export { Login };
