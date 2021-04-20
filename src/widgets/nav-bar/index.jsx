import React, { useState } from "react";
import { NavLogo } from "../../assets/images";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import "./nav-bar.css";

const NavBar = ({
  firstItem,
  firstItemIcon,
  secondItem,
  secondItemIcon,
  profile,
  profileIcon,
  button,
}) => {
  const [toggle, setToggle] = useState({ clicked: false });

  const handleToggle = () => {
    setToggle({ clicked: !toggle.clicked });
  };

  return (
    <>
      <div className="nav-bar">
        <div className="container">
          <div className="nav-bar-logo">
            <img src={NavLogo} alt="logo" />
          </div>

          {!toggle.clicked ? (
            <div className="hamburger-menu">
              <CgMenuGridO onClick={handleToggle} />
            </div>
          ) : (
            <div className="nav-bar-items">
              <div className="nav-bar-menu-list">
                <div>
                  <span>{firstItemIcon}</span>
                  <p>{firstItem}</p>
                </div>
                <div>
                  <span>{secondItemIcon}</span>
                  <p>{secondItem}</p>
                </div>
                <div>
                  <span>{profileIcon}</span>
                  <p>{profile}</p>
                </div>
                <div>{button}</div>
              </div>

              <div className="close-menu">
                <CgClose onClick={handleToggle} />
              </div>
            </div>
          )}

          <div className="desktop-menu">
            <div>
              <span>{firstItemIcon}</span>
              <p>{firstItem}</p>
            </div>
            <div>
              <span>{secondItemIcon}</span>
              <p>{secondItem}</p>
            </div>
            <div>
              <span>{profileIcon}</span>
              <p>{profile}</p>
            </div>
            <div>{button}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NavBar };
