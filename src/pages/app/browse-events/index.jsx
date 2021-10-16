import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import {
  Karioke4,
  Karioke2,
  LadyWithGlasses,
  kings,
} from '../../../assets/images';
import { Button } from '../../../components/button';
import { EventCard } from '../../../components/event-card';
import { Input } from '../../../components/input';
import Search from '../../../components/search';
import './browse-events.css';
import { NavBar } from '../../../widgets/nav-bar';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const BrowseEvents = () => {
  const [user, setUser] = useState('');
  const history = useHistory();

  const events = [
    {
      id: 1,
      event_name: 'Event 1',
      description: 'this is a sample events',
      img: Karioke4,
    },
    {
      id: 2,
      event_name: 'Event 2',
      description: 'this is a sample events',
      img: kings,
    },
    {
      id: 3,
      event_name: 'Event 3',
      description: 'this is a sample events',
      img: kings,
    },
    {
      id: 4,
      event_name: 'Event 4',
      description: 'this is a sample events',
      img: Karioke4,
    },
    {
      id: 5,
      event_name: 'Event 5',
      description: 'this is a sample events',
      img: kings,
    },
    {
      id: 6,
      event_name: 'Event 6',
      description: 'this is a sample events',
      img: Karioke4,
    },
  ];
  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
    console.log(isAuthenticated);

    if (!isAuthenticated) {
      history.push('/signin');
    }
  }, []);
  return (
    <>
      <NavBar
        firstItem={'Home'}
        firstLink={'/'}
        secondItem={'Events'}
        secondLink={'/browse-events'}
        profile={user ? `${user.first_name}` : null}
        profileIcon={user ? <FaUser /> : null}
        button={
          user ? null : (
            <Button
              text={'Sign In'}
              className="btn"
              onClick={() => history.push('/signin')}
            />
          )
        }
      />
      <section>
        <Search />
        <section className="browse-hero-container">
          <div className="browse-hero-desc">
            <h2>Hello!</h2>
            <p>
              The best of fun and thoughtful events templates that provide a
              great way to get the community talking
            </p>
          </div>
          <div className="browse-hero-img">
            <img src={LadyWithGlasses} alt="lady-with-glasses" />
          </div>
        </section>
        <header className="container">
          <h3 style={{ marginBottom: '100px' }}>Category</h3>
        </header>
        <header className="container event-header">
          <h4>Party Events</h4>
        </header>
        <section className="container events-list">
          {events.map((event, idx, events) => (
            <div key={event.id} className="event-card-placeholder">
              <Link to={{ pathname: `/events/${event.id}`, state: { events } }}>
                <EventCard
                  imagesrc={event.img}
                  alt={event.descrption}
                  description={event.descrption}
                />
              </Link>
            </div>
          ))}
        </section>
        <header className="container event-header">
          <h4>Tech Events</h4>
        </header>
        <section className="container events-list">
          {events.map(event => (
            <div className="event-card-placeholder">
              <Link to={`/events/${event.id}`}>
                <EventCard
                  imagesrc={Karioke4}
                  alt="events"
                  description="Lorem ipsum dolor gid sef deradf "
                />
              </Link>
            </div>
          ))}
        </section>
        <div className="more-btn">
          <Button text="See More" className="btn btn-primary" />
        </div>
      </section>
    </>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(BrowseEvents);
