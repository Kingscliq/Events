import React, { useRef } from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import {
  Karioke1,
  Karioke,
  Karioke5,
  Karioke4,
  blankProfile,
} from '../../../assets/images';
import { Button } from '../../../components/button';
import { EventCard } from '../../../components/event-card';
import { Input } from '../../../components/input';
import Search from '../../../components/search';
import './browse-events.css';
import { NavBar } from '../../../widgets/nav-bar';
import { useParams, useHistory } from 'react-router-dom';
// import { useToImage } from 'react-to-image';
import { exportComponentAsJPEG } from 'react-component-export-image';

const EventPreview = props => {
  // toggle arrow colors
  const [hover, setHover] = React.useState(false);
  const [dp, setDp] = React.useState(null);

  // console.log(props.location.state.events);
  const { id } = useParams();
  console.log(id);
  const { events } = props.location.state;
  // console.log(events);
  const filtered = events.filter(event => event.id == id);

  //  Make Refrence to the Banner to print
  const bannerToPrint = useRef();

  const handleUploadChange = e => {
    if (e.target.files.length !== 0) {
      setDp(URL.createObjectURL(e.target.files[0]));
    } else {
      setDp(blankProfile);
    }
  };

  const history = useHistory();

  return (
    <>
      <NavBar
        firstItem={'Home'}
        firstLink={'/'}
        secondItem={'Events'}
        secondLink={'/browse-events'}
        profileLink={`www.yahoo.com`}
        profile={'Profile'}
        button={<Button text={'Sign In'} className="btn" />}
      />
      <section>
        {/* <Search /> */}
        <div className="container arrow-icon" onClick={() => history.goBack()}>
          <FaArrowLeft
            style={{
              color: hover ? '#f17140' : '#333',
              fontSize: '1.5rem',
              transition: 'all .5s ease-in-out',
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
        </div>

        {filtered.map(event => (
          // <div>{event.name}</div>
          <>
            <section className="preview-container">
              <header className="event-header">
                <h2>{event.event_name}</h2>
              </header>

              <figure className="preview-image" ref={bannerToPrint}>
                <img src={event.img} alt="karioke" />
                <div className="dp-upload-btn-div">
                  <div className="dp-img">
                    <input
                      type="file"
                      onChange={handleUploadChange}
                      className="dp-upload-btn"
                    />
                    <div className="dp-img-main">
                      <img
                        src={dp ? dp : blankProfile}
                        alt=""
                        name="image"
                        accept="image*/"
                      />
                    </div>
                  </div>
                </div>
              </figure>
              <div className="slider-arrow">
                <IoIosArrowForward
                  style={{
                    color: hover ? '#f17140' : '#333',
                    transition: 'all .5s ease-in-out',
                  }}
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
                />
              </div>
              <div className="download-btn">
                <Button
                  text="Download Event Card"
                  className="btn btn-primary"
                  onClick={() =>
                    exportComponentAsJPEG(bannerToPrint, {
                      fileName: 'myGeneratedBanner',
                    })
                  }
                />
              </div>
            </section>
            <header className="container event-header">
              <h2>About this Event</h2>
            </header>
            <div className="preview-desc container">
              <p>{event.description}</p>
              <p>
                in reprehenderit in voluptate velit esse cillum Dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default EventPreview;
