import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Karioke1, Karioke, Karioke5, Karioke4 } from "../../../assets/images";
import { Button } from "../../../components/button";
import { EventCard } from "../../../components/event-card";
import { Input } from "../../../components/input";
import Search from "../../../components/search";
import "./browse-events.css";

const EventPreview = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <section>
      <Search />
      <div className="container arrow-icon">
        <FaArrowLeft
          style={{
            color: hover ? "#f17140" : "#333",
            fontSize: "1.5rem",
            transition: "all .5s ease-in-out",
          }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
      </div>
      <section className="preview-container">
        <header className="event-header">
          <h2>Karaoke Thursday</h2>
        </header>

        <figure className="preview-image">
          <img src={Karioke5} alt="karioke" />
        </figure>
        <div className="slider-arrow">
          <IoIosArrowForward
            style={{
              color: hover ? "#f17140" : "#333",
              transition: "all .5s ease-in-out",
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
        </div>
        <div className="sub-preview-img">
          <figure>
            <img src={Karioke1} alt="" />
          </figure>
          <figure>
            <img src={Karioke} alt="" />
          </figure>
        </div>
      </section>
      <header className="container event-header">
        <h2>About this Event</h2>
      </header>
      <div className="preview-desc container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </p>
        <p>
          in reprehenderit in voluptate velit esse cillum Dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <header className="container">
        <h3 style={{ marginBottom: "100px" }}>Category</h3>
      </header>
      <header className="container event-header">
        <h4>Party Events</h4>
      </header>
      <section className="container events-list">
        <div className="event-card-placeholder">
          <EventCard
            imagesrc={Karioke4}
            alt="events"
            description="Lorem ipsum dolor gid sef deradf "
          />
        </div>
        <div className="event-card-placeholder">
          <EventCard
            imagesrc={Karioke4}
            alt="events"
            description="Lorem ipsum dolor gid sef deradf "
          />
        </div>
        <div className="event-card-placeholder">
          <EventCard
            imagesrc={Karioke4}
            alt="events"
            description="Lorem ipsum dolor gid sef deradf "
          />
        </div>
      </section>
      <header className="container event-header">
        <h4>Tech Events</h4>
      </header>
      <section className="container events-list">
        <div className="event-card-placeholder">
          <EventCard
            imagesrc={Karioke4}
            alt="events"
            description="Lorem ipsum dolor gid sef deradf "
          />
        </div>
        <div className="event-card-placeholder">
          <EventCard
            imagesrc={Karioke4}
            alt="events"
            description="Lorem ipsum dolor gid sef deradf "
          />
        </div>
        <div className="event-card-placeholder">
          <EventCard
            imagesrc={Karioke4}
            alt="events"
            description="Lorem ipsum dolor gid sef deradf "
          />
        </div>
      </section>
      <div className="more-btn">
        <Button text="See More" className="btn btn-primary" />
      </div>
    </section>
  );
};

export default EventPreview;
