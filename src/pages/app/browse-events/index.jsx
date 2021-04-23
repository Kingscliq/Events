import React from "react";
import { FaSearch } from "react-icons/fa";
import { Karioke4, Karioke2, LadyWithGlasses } from "../../../assets/images";
import { Button } from "../../../components/button";
import { EventCard } from "../../../components/event-card";
import { Input } from "../../../components/input";
import Search from "../../../components/search";
import "./browse-events.css";

const BrowseEvents = () => {
  return (
    <section>
      <Search />
      <section className="browse-hero-container">
        <div className="browse-hero-desc">
          <h2>Hello!</h2>
          <p>
            The best of fun and thoughtful events templates that provide a great
            way to get the community talking
          </p>
        </div>
        <div className="browse-hero-img">
          <img src={LadyWithGlasses} alt="lady-with-glasses" />
        </div>
      </section>
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

export default BrowseEvents;