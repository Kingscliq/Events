import React from "react";
import { FooterLogo } from "../../assets/images";
import "./footer.css";
import { FootLink } from "../../components/applink";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-div">
          <div className="copy-rights-section">
            <hr className="footer-divider" />
            <span className="footer-logo">
              <img src={FooterLogo} alt="logo" />
            </span>
            <span>&copy; Kesh Union Boys 2021 All Rights Reserved</span>
          </div>
          <div className="footer-grid">
            <ul className="footer-list">
              <h3> Product </h3>
              <li>
                <FootLink>Overview</FootLink>{" "}
              </li>
              <li>
                <FootLink>Features</FootLink>
              </li>
              <li>
                <FootLink>Pricing </FootLink>
              </li>
              <li>
                <FootLink>Releases</FootLink>
              </li>
            </ul>
            <ul className="footer-list">
              <h3> Company </h3>
              <li>
                <FootLink> About </FootLink>
              </li>
              <li>
                {" "}
                <FootLink>Contact</FootLink>
              </li>
              <li>
                <FootLink> Partners</FootLink>{" "}
              </li>
              <li>
                {" "}
                <FootLink>Careers </FootLink>
              </li>
            </ul>
            <ul className="footer-list">
              <h3> Support </h3>
              <li>
                <FootLink> Help</FootLink>{" "}
              </li>
              <li>
                <FootLink> Privacy Policy</FootLink>{" "}
              </li>
              <li>
                <FootLink> Legal </FootLink>
              </li>
              <li>
                <FootLink> Status</FootLink>{" "}
              </li>
            </ul>
            <ul className="footer-list">
              <h3> Follow Us </h3>
              <li>
                <FootLink>Twitter</FootLink>
              </li>
              <li>
                <FootLink>Instagram</FootLink>
              </li>
              <li>
                <FootLink>Facebook</FootLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <div className="main-footer">
				<div className="container">
					<div className="footer-logo">
						<img src={FooterLogo} alt="logo" />
					</div>

					<ul className="footer-list">
						<h2> Product </h2>
						<li> Overview </li>
						<li> Features </li>
						<li> Pricing </li>
						<li> Releases </li>
					</ul>

					<ul className="footer-list">
						<h2> Company </h2>
						<li> About </li>
						<li> Contact </li>
						<li> Partners </li>
						<li> Careers </li>
					</ul>

					<ul className="footer-list">
						<h2> Support </h2>
						<li> Help </li>
						<li> Privacy Policy </li>
						<li> Legal </li>
						<li> Status </li>
					</ul>

					<ul className="footer-list">
						<h2> Follow Us </h2>
						<li>
							<a href="www.twitter.com"> Twitter </a>
						</li>
						<li>
							<a href="www.instagram"> Instagram </a>
						</li>
						<li>
							<a href="www.facebook.com"> Facebook </a>
						</li>
					</ul>
				</div>
			</div> */}
    </>
  );
};

export { Footer };
