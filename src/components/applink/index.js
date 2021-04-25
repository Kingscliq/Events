import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// +++++++++++++++++++++ NAV LINK ++++++++++++++++++++++++++++++
const MenuLink = ({ children, to, exact }) => {
  const match = useRouteMatch({ exact, path: to });
  const [hover, setHover] = useState(false);

  const linkStyles = {
    textDecoration: "none",
    color: "#0b0d17",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    marginBotton: "10px",
    transition: "color 2s ease-in-out",
    borderBottom:
      match === "active" || hover ? "2px solid var(--primary)" : "none",
  };

  return (
    <Link
      to={to}
      style={linkStyles}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {children}
    </Link>
  );
};

// +++++++++++++++++++++++ FOOTER LINK ++++++++++++++++++++++++++++++++

export const FootLink = ({ children, to, exact }) => {
  const match = useRouteMatch({ exact, path: to });
  const [hover, setHover] = useState(false);
  // ++ LINK STYLE ++
  const footerLinkStyles = {
    textDecoration: "none",
    color: match === "active" || hover ? "var(--light)" : "inherit",
    alignItems: "inherit",
    fontSize: "inherit",
    transition: "all 0.5s ease-in-out",
  };

  return (
    <Link
      to={to}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={footerLinkStyles}
    >
      {children}
    </Link>
  );
};
export default MenuLink;
