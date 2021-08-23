import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../../../widgets/nav-bar';
import { AboutDesign } from './about-design';
import { AboutEvent } from './about-event';
import { AboutGuests } from './about-guests';
import './host-event.css';
import { UploadTemplate } from './upload-template';
import { connect } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';

const HostEvent = ({ loading, isAuthenticated }) => {
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
  const [user, setUser] = useState('');
  const history = useHistory();
  const [eventData, setEventData] = useState({});

  const onChange = e => {
    setEventData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
    console.log(isAuthenticated);

    if (!isAuthenticated) {
      history.push('/signin');
    }
  }, []);
  const renderSwitch = step => {
    switch (step) {
      case 1:
        return <AboutEvent onChange={onChange} nextStep={nextStep} />;
      case 2:
        return (
          <AboutGuests
            onChange={onChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <AboutDesign
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={onChange}
          />
        );
      case 4:
        return (
          <UploadTemplate
            onChange={onChange}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            event={event}
          />
        );
      default:
        return 'stuff';
    }
  };

  const [event, setEvent] = useState({
    image: '',
  });

  const handleChange = event => {
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
      <NavBar
        firstItem={'Browse an event'}
        firstLink={'/browse-events'}
        secondItem={user ? null : 'Sign In'}
        secondLink={user ? null : '/signin'}
        profile={user ? `Welcome, ${user.first_name}` : null}
        profileIcon={<FaUserAlt />}
      />
      <div>{renderSwitch(step)}</div>
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(HostEvent);
