import { Formik, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Input } from '../../../components/input';
import { NavBar } from '../../../widgets/nav-bar';
import * as Yup from 'yup';
import { lightLoader, Loader } from '../../../assets/images';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaUserAlt,
  FaEyeSlash,
  FaGoogle,
  FaUser,
} from 'react-icons/fa';
import { Button } from '../../../components/button';
import '../login/login.css';
import { EventChairs } from '../../../assets/images';
import { Footer } from '../../../widgets/footer';
import FormInput from '../../../components/form-input';
import { register } from '../../../store/actions/index';
import { connect } from 'react-redux';

const SignUp = ({ user, loading, showVerificationNotice, register }) => {
  const initialFormState = { first_name: '', email: '', password: '' };
  const [eye, setEye] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const handleEyeToggle = e => {
    setEye(prevState => !prevState);
  };

  const history = useHistory();

  useEffect(() => {
    if (showVerificationNotice) {
      // console.log(showVerificationNotice)
      history.push('/verify-email');
    }
  }, [showVerificationNotice]);
  return (
    <>
      <NavBar
        firstItem={'Home'}
        firstLink={'/'}
        secondItem={'Events'}
        secondLink={'/browse-events'}
        profile={user ? `${user.first_name}` : null}
        profileIcon={user ? <FaUser /> : null}
        button={<Button text={'Sign In'} className="btn" />}
      />

      <section className="form-container">
        <div className="form-parent">
          <Formik
            // Initialise Initial Form Values
            initialValues={initialFormState}
            // Function for Error message Display
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Please enter a valid email')
                .required('You have to enter an email'),
              password: Yup.string().required('Please enter your password'),
              first_name: Yup.string().required('Please enter your First Name'),
            })}
            // Submit Function
            onSubmit={data => {
              console.log(data);
              register(data);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <>
                <form className="card" onSubmit={handleSubmit}>
                  <header className="form-header">
                    <h2>Sign Up</h2>
                  </header>
                  <p className="form-para" style={{ justifyContent: 'center' }}>
                    Already Have an Account? &nbsp;
                    <span
                      className="text-primary"
                      style={{ cursor: 'pointer' }}
                      onClick={() => history.push('/signin')}
                    >
                      SignIn
                    </span>
                  </p>
                  {/* {props.regSuccess ? (
                    <div className="alert alert-success">
                      {props.regSuccessMsg}
                    </div>
                  ) : null}
                  {props.regFailed ? (
                    <div className="alert alert-danger">
                      {props.regFailedMsg}
                    </div>
                  ) : null} */}
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaUserAlt />}
                    placeholder="Enter Firstname"
                    value={values.first_name}
                    onChange={handleChange}
                    name="first_name"
                    inputStyle={{
                      transition: 'box-shadow .3s ease-in-out',
                      boxShadow: firstNameFocus
                        ? '0 1px 6px rgb(32 33 36 / 28%)'
                        : 'none',
                      borderColor: firstNameFocus
                        ? 'rgba(223,225,229,0)'
                        : errors.first_name && touched.first_name
                        ? 'red'
                        : '#dfe1e5',
                    }}
                  />
                  <ErrorMessage name="first_name">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <FormInput
                    type="text"
                    className="textField"
                    icon={<FaEnvelope />}
                    placeholder="Enter Email"
                    values={values.email}
                    onChange={handleChange}
                    name="email"
                    inputStyle={{
                      transition: 'box-shadow .3s ease-in-out',
                      boxShadow: emailFocus
                        ? '0 1px 6px rgb(32 33 36 / 28%)'
                        : 'none',
                      borderColor: emailFocus
                        ? 'rgba(223,225,229,0)'
                        : errors.email && touched.email
                        ? 'red'
                        : '#dfe1e5',
                    }}
                  />
                  <ErrorMessage name="email">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>

                  <FormInput
                    type={eye ? 'text' : 'password'}
                    className="textField"
                    icon={<FaLock />}
                    placeholder="Enter Password"
                    rightIcon={eye ? <FaEye /> : <FaEyeSlash />}
                    handleClick={handleEyeToggle}
                    values={values.password}
                    onChange={handleChange}
                    name="password"
                    inputStyle={{
                      transition: 'box-shadow .3s ease-in-out',
                      boxShadow: passwordFocus
                        ? '0 1px 6px rgb(32 33 36 / 28%)'
                        : 'none',
                      borderColor: passwordFocus
                        ? 'rgba(223,225,229,0)'
                        : errors.password && touched.password
                        ? 'red'
                        : '#dfe1e5',
                    }}
                  />
                  <ErrorMessage name="first_name">
                    {msg => (
                      <div style={{ color: 'red', marginBottom: '10px' }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                  <Button
                    text={
                      loading ? (
                        <img src={lightLoader} width="50" height="50" />
                      ) : (
                        'Sign Up'
                      )
                    }
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading ? 'disabled' : false}
                  />
                  <p className="form-para">
                    <input type="checkbox" />
                    &nbsp;&nbsp; <span>Save Password</span>
                  </p>
                  <div style={{ textAlign: 'center' }}>Or</div>
                  <Button
                    text={'Sign Up With Google'}
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
