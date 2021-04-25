import React from "react";
import {
  BrowseEvents,
  CupLady,
  GenerateLink,
  HappyLadies,
  HostEvents,
  IndividualEdit,
  People,
  SignUpIcon,
  SkySrapper,
  SocialEvents,
  SpeechLady,
  TechEvents,
  UploadTemplate,
} from "../../../assets/images";
import { Button } from "../../../components/button";
import { HeaderWidget } from "../../../widgets/header-widget";
import { Footer } from "../../../widgets/footer";
import { NavBar } from "../../../widgets/nav-bar";
import "./landing-page.css";

const LandingPage = () => {
  const linkStyle = {
    color: "#f17140",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };
  return (
    <>
      <NavBar
        firstItem={"Host event"}
        secondItem={"Browse an event"}
        secondLink={"/browse-events"}
        button={<Button text={"Sign In"} className="btn btn-primary" />}
      />
      <HeaderWidget />
      <main className="landing-page-main">
        <section className="get-started">
          <div className="container">
            <div>
              <h1>Connect through events</h1>
              <p>
                Bringing you the best events template designs picked out and
                designed by the best designers.
              </p>
              <Button text={"Get started"} className="btn btn-primary" />
            </div>
            <div>
              <img src={SkySrapper} alt="skyscraper" />
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <div className="container">
            <h1> How it works </h1>
            <div className="how-it-works-items">
              <div className="sign-up">
                <img src={SignUpIcon} alt="signup icon" />
                <h3> Sign Up</h3>
                <p> Create and account to get started </p>
              </div>
              <div className="upload-template">
                <img src={UploadTemplate} alt="upload template" />
                <h3> Upload Template </h3>
                <p> Upload your confirmation image template </p>
              </div>
              <div className="generate-link">
                <img src={GenerateLink} alt="generate link" />
                <h3> Generate Link </h3>
                <p> Generate link for guests to edit individualy </p>
              </div>
            </div>
          </div>
        </section>

        <section className="key-features">
          <div className="container">
            <h1>Discover the key features</h1>
            <div className="key-features-items">
              <div className="host-events">
                <img src={HostEvents} alt="host events" />
                <h3> Host Events </h3>
                <p>
                  {" "}
                  Do you have a lot of guests? Host an event and save time with
                  confirmations.{" "}
                </p>
              </div>
              <div className="browse-events">
                <img src={BrowseEvents} alt="browse events" />
                <h3> Browse Events </h3>
                <p>
                  {" "}
                  A Last minute occasion? Search for the best event templates
                  from us{" "}
                </p>
              </div>
              <div className="individual-edit">
                <img src={IndividualEdit} alt="browse events" />
                <h3> Individual Edit </h3>
                <p>
                  {" "}
                  Allow invited guests edit their names themselves by sharing a
                  link to them{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="our-categories">
          <div className="container">
            <div className="our-categories-images">
              <div className="our-categories-images-div">
                <div>
                  <img src={HappyLadies} alt="happy ladies" />
                </div>
                <div className="people">
                  <img src={People} alt="people" />
                </div>
              </div>
              <div className="our-categories-images-div">
                <div className="speech-lady">
                  <img src={SpeechLady} alt="speech lady" />
                </div>
                <div>
                  <img src={CupLady} alt="cup lady" />
                </div>
              </div>
            </div>
            <div className="our-categories-items">
              <h1> Our Categories </h1>
              <p className="our-categories-top-p">
                Browse through some of the best event templates available and
                designed by the best of designers.
              </p>
              <div className="social-events-container">
                <img src={SocialEvents} alt="social events" />
                <div className="social-events-div">
                  <h3> Social events</h3>
                  <p> Explore the best social events templates. </p>
                </div>
              </div>
              <div className="tech-events-container">
                <img src={TechEvents} alt="tech events" />
                <div className="tech-events-div">
                  <h3> Tech events</h3>
                  <p> Explore the best tech events templates. </p>
                </div>
              </div>

              <Button text={"Browse Events"} className={"btn"} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export { LandingPage };
