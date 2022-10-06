import React, { Component, useEffect, useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";

import { greeting, settings } from "./portfolio";
import SeoHeader from "./components/seoHeader/SeoHeader";

export const Header = ({ theme: theme1 }) => {


  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };
  const [scroll, setscroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 60) {

        setscroll(false)
      }
      else {
        setscroll(true)
      }
    })
  }, [])

  const handlescroll = (id) => {
    console.log(id)
    const section = document.querySelector(`#${id}`);
    //console.log(section)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  }

  const theme = theme1;
  const link = settings.isSplash ? "/splash" : "home";
  return (
    <div >
      <Fade style={{ width: "100%" }} top duration={1000} distance="20px">
        <SeoHeader />

        <div className={scroll ? "header1" : "header"} style={{ background: theme.body }} >
          <div className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </div>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <div
                onClick={() => console.log("first")}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text, padding: "1rem" }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </div>
            </li>

            <li>
              <div
                onClick={() => handlescroll("projects")}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text, padding: "1rem" }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </div>
            </li>

            <li>
              <div
                onClick={() => handlescroll("contact")}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text, padding: "1rem" }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Contact Me
              </div>
            </li>
          </ul>
        </div>

      </Fade>
    </div>
  );
}

export default Header;
