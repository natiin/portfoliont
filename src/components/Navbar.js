import { NavLink } from "react-router-dom";

import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [state, setState] = useState(false);
  function toggleState(e) {
    setState(!state);
  }

  const sections = [
    { id: "home", to: "/" },
    { id: "about", to: "/about" },
    { id: "projects", to: "/projects" },
    { id: "contact", to: "/contact" },
  ];
  const NavLinks = sections.map((section, index) => {
    return (
      <li onClick={() => state && toggleState()} className={section.id} key={index} style={state ? { animation: `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s` } : { animation: "" }}>
        <NavLink exact className="nav-link" activeClassName="active-nav-link" to={section.to}>
          {section.id}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <div className="logo">
        <span className="name">n</span>
        <span className="last-name">t</span>
      </div>
      <ul className={state ? "nav-links nav-active" : "nav-links"}>{NavLinks}</ul>
      <div className="hamburger" onClick={toggleState}>
        {state ? <i className="bi bi-x"></i> : <i className="bi bi-list" id="ham"></i>}
      </div>
    </nav>
  );
}

export default Navbar;
