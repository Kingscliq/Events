import React from "react";
import { FooterLogo } from "../../assets/images";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<div className="main-footer">
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
			</div>
		</>
	);
};

export { Footer };
