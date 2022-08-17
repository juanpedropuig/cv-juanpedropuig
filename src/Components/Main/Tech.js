import React from "react";

import { TiHtml5 } from 'react-icons/ti';
import { DiCss3, DiGit, DiRuby } from 'react-icons/di';
import { SiJavascript, SiRedux, SiExpress, SiJava, SiCplusplus } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { IconContext } from "react-icons";

export const Tech = () => {
  return (
    <ul>
      <IconContext.Provider value={{ className: "techIcon", size: 20 }}>
        <li className="technology" key="t1">
          <TiHtml5 color="OrangeRed" />
          <p>{'HTML & '}</p>
          <DiCss3 color="RoyalBlue" />
          <p>CSS</p>
        </li>
        <li className="technology" key="t2">
          <SiJavascript color="Gold"/>
          <p>JavaScript</p>
        </li>
        <li className="technology" key="t3">
          <GrReactjs color="Cyan"/>
          <p>{'React & react-router'}</p>
        </li>
        <li className="technology" key="t4">
          <SiRedux color="DarkViolet"/>
          <p>Redux</p>
        </li>
        <li className="technology" key="t5">
          <FaNodeJs color="LimeGreen"/>
          <p>Node.js</p>
        </li>
        <li className="technology" key="t6">
          <SiExpress color="Black"/>
          <p>Express.js</p>
        </li>
        <li className="technology" key="t7">
          <DiGit color="OrangeRed"/>
          <p>{'Git & '}</p>
          <BsGithub color="Black" />
          <p>Github</p>
        </li>
        <li className="technology" key="t8">
          <SiJava color="OrangeRed"/>
          <p>Java</p>
        </li>
        <li className="technology" key="t9">
          <SiCplusplus color="MediumBlue"/>
          <p>{'C++ & C'}</p>
        </li>
        <li className="technology" key="t10">
          <DiRuby color="Crimson"/>
          <p>{'Ruby... (on progress)'}</p>
        </li>
      </IconContext.Provider>
    </ul>
  );
}