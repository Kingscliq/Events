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
import { createEvent } from '@testing-library/react';

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
  const [eventData, setEventData] = useState({
    eventType: '',
    eventDuration: '',
    location: '',
    audience: '',
    existingMedia: '',
    fileType: '',
    file: '',
  });

  const onChange = e => {
    setEventData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(e.target.value);
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
        return (
          <AboutEvent
            eventData={eventData}
            onChange={onChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <AboutGuests
            onChange={onChange}
            nextStep={nextStep}
            prevStep={prevStep}
            eventData={eventData}
          />
        );
      case 3:
        return (
          <AboutDesign
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={onChange}
            eventData={eventData}
          />
        );
      case 4:
        return (
          <UploadTemplate
            eventData={eventData}
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

  const handleChange = e => {
    if (e.target.files) {
      let currentImg = e.target.name;
      setEvent({ ...event, [currentImg]: e.target.files[0] });
      console.log(event);
      setEventData(prev => ({ ...prev, file: e.target.files[0] }));
      console.log(eventData);
    } else {
      let currentInput = e.target.name;
      setEvent({ ...event, [currentInput]: e.target.value });
      // setPassword({ ...password, [currentInput]: event.target.value });
      console.log(event);
    }
  };

  const onSubmit = data => {
    // createEvent()
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
