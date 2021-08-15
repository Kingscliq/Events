import { Formik, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
// import { Input } from "../../../components/input";
import { NavBar } from "../../../widgets/nav-bar";
// import client from "../../../api/api-client";
import { connect } from "react-redux";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaUser,
} from "react-icons/fa";
import { Button } from "../../../components/button";
import "./login.css";
import { SmilingLady } from "../../../assets/images";
import { Footer } from "../../../widgets/footer";
import FormInput from "../../../components/form-input";
// import { connect } from "react-redux";
import { signIn } from "../../../store/actions/index";
import { lightLoader } from "../../../assets/images";

const Login = ({ signIn, loading, user }) => {
  const initialFormState = { email: "", password: "" };

  // Handle Password Visibility
  const [eye, setEye] = useState(false);

  // Get User from Local Storage
  // const [user, setUser] = useState();

  const handleEyeToggle = e => {
    setEye(prevState => !prevState);
  };

  // import UseHistory for Routing
  const history = useHistory();
  // const fetchUser = () => {
  //   setUser(JSON.parse(localStorage.getItem("user")));
  // };
  useEffect(() => {
    if (user) history.push("/host-event");
  }, [user]);
  return (
    <>
      <NavBar
        firstItem={"Home"}
        firstLink={"/"}
        secondItem={"Events"}
        secondLink={"/browse-events"}
        profile={user ? `${user.first_name}` : null}
        profileIcon={user ? <FaUser /> : null}
        button={user ? null : <Button text={"Sign In"} className="btn" />}
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
            onSubmit={data => {
              signIn(data);
            }}
          >
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              errors,
              touched,
            }) => (
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
                    {msg => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                  <FormInput
                    type={eye ? "text" : "password"}
                    className="textField"
                    icon={<FaLock />}
                    placeholder="Enter Password"
                    rightIcon={eye ? <FaEye /> : <FaEyeSlash />}
                    handleClick={handleEyeToggle}
                    handleBlur={handleBlur}
                    onBlur={() => setPasswordFocus(false)}
                    onFocus={() => setPasswordFocus(true)}
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                  />
                  <ErrorMessage name="password">
                    {msg => (
                      <div style={{ color: "red", marginBottom: "20px" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                  <Button
                    text={
                      loading ? (
                        <img src={lightLoader} width="50" height="50" />
                      ) : (
                        "Login"
                      )
                    }
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading ? "disabled" : false}
                  />
                  <p className="form-para">
                    &nbsp;&nbsp; <span>Forgot Password</span>
                  </p>
                  <div style={{ textAlign: "center" }}>OR</div>
                  {/* <Button
                    text="Sign In With Google"
                    type="submit"
                    className="btn btn-light"
                    icon={<FaGoogle />}
                  /> */}
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
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
});
export default connect(mapStateToProps, { signIn })(Login);
