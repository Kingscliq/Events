import React, { useState } from "react";
import { NavLogo } from "../../assets/images";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import "./nav-bar.css";
import { Link } from "react-router-dom";
import MenuLink from "../../components/applink";

const NavBar = ({
  firstItem,
  firstLink,
  firstItemIcon,
  secondItem,
  secondLink,
  secondItemIcon,
  profile,
  profileLink,
  profileIcon,
  buttonLink,
  button,
}) => {
  const [toggle, setToggle] = useState({ clicked: false });

  const handleToggle = () => {
    setToggle({ clicked: !toggle.clicked });
    console.log(profileLink);
  };

  // const linkStyle = {
  // 	textDecoration: "none",
  // 	color: "#0b0d17",
  // 	display: "flex",
  // 	alignItems: "center",
  // 	fontSize: "16px",
  // 	marginBotton: "10px",
  // };

  return (
    <>
      <header className="nav-bar">
        <nav className="container">
          <div className="nav-bar-logo">
            <img src={NavLogo} alt="logo" />
          </div>

          {!toggle.clicked ? (
            <div className="hamburger-menu">
              <CgMenuGridO onClick={handleToggle} />
            </div>
          ) : (
            <div className="nav-bar-items">
              <ul className="nav-bar-menu-list">
                <li>
                  <MenuLink to={firstLink}>
                    <span>{firstItemIcon}</span>
                    {firstItem}
                  </MenuLink>
                </li>
                <li>
                  <MenuLink to={secondLink}>
                    <span>{secondItemIcon}</span>
                    {secondItem}
                  </MenuLink>
                </li>
                <li>
                  <MenuLink to={profileLink}>
                    <span>{profileIcon}</span>
                    {profile}
                  </MenuLink>
                </li>
                <li>
                  <Link to={buttonLink}>{button}</Link>
                </li>
              </ul>

              <div className="close-menu">
                <CgClose onClick={handleToggle} />
              </div>
            </div>
          )}

          <ul className="desktop-menu">
            <li>
              <MenuLink to={firstLink}>
                <span>{firstItemIcon}</span>
                {firstItem}
              </MenuLink>
            </li>
            <li>
              <MenuLink to={secondLink}>
                <span>{secondItemIcon}</span>
                {secondItem}
              </MenuLink>
            </li>
            <li>
              <MenuLink to={profileLink}>
                <span>{profileIcon}</span>
                {profile}
              </MenuLink>
            </li>
            <li>
              <Link to={buttonLink}>{button}</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { NavBar };
