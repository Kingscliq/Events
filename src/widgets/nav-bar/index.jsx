import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout, NavLogo } from '../../assets/images';
import { CgMenuGridO, CgClose } from 'react-icons/cg';
import './nav-bar.css';
import { Link } from 'react-router-dom';
import MenuLink from '../../components/applink';

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

  const [user, setUser] = useState('');

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
    console.log(isAuthenticated);
  }, []);

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
                {user ? (
                  <>
                    <li>
                      <MenuLink to={profileLink}>
                        <span>{profileIcon}</span>
                        {profile}
                      </MenuLink>
                    </li>
                    <li>
                      <MenuLink to={'/logout'}>
                        <span>
                          <img src={logout} height="25" width="25" />
                        </span>
                        Logout
                      </MenuLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to={buttonLink}>{button}</Link>
                  </li>
                )}
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
            {user ? (
              <>
                <li>
                  <MenuLink to={profileLink}>
                    <span>{profileIcon}</span>
                    {profile}
                  </MenuLink>
                </li>
                <li>
                  <MenuLink to={'/logout'}>
                    <span>
                      <img src={logout} height="25" width="25" />
                    </span>
                    Logout
                  </MenuLink>
                </li>
              </>
            ) : (
              <li>
                <Link to={buttonLink}>{button}</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export { NavBar };
