import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { EnglishContext } from "../EnglishContext";

import { HiUserCircle } from 'react-icons/hi';
import { RiToolsFill  } from 'react-icons/ri';
import { MdOutlineComputer } from 'react-icons/md';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";

export const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { english, setEnglish } = useContext(EnglishContext);
  const [ pressed, setPressed ] = useState(false);

  return (
    <aside className="sidebar ">
      <section className="toggleContainer">
        <div className="themeContainer">
          <input type="checkbox" id="toggle" onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
            setPressed(!pressed); }} />
          <label htmlFor="toggle" className="theme-button"></label>
        </div>
        <div className="languageContainer">
          <button
              className={`lang-button lang-button-${theme}`}
              onClick={() => setEnglish(!english)}>
            <b>{english ? 'Spanish' : 'Inglés'}</b>
          </button>
        </div>
      </section>
      <section className="sidebarContainer">
        <IconContext.Provider
              value={{
                className: 'menu',
                size: '42px',
                color: theme === 'light' ? '#0D155A' : 'whitesmoke',
                fill: theme === 'light' ? '#0D155A' : 'whitesmoke',
                stroke: theme === 'light' ? '#0D155A' : 'whitesmoke' }}>
          <NavLink to="/"
              className="menuContainer"
              id="home">
            <div className="menuIcon">
              <HiUserCircle />
            </div>  
          </NavLink>
          <NavLink to="/academic-background"
              className="menuContainer"
              id="studies"> 
            <div className="menuIcon">
              <HiOutlineBookOpen />
            </div>
          </NavLink>
          <NavLink to="/work-experience"
              className="menuContainer"
              id="jobs">
            <div className="menuIcon">
              <MdOutlineComputer />
            </div>
          </NavLink>
          <NavLink to="/skillset"
              className="menuContainer"
              id="skills">
            <div className="menuIcon">
              <RiToolsFill />
            </div>
          </NavLink>
        </IconContext.Provider>
      </section>
    </aside>
  );
}