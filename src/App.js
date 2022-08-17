import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './Components/Main/Home';
import { AcademicBackground } from './Components/Main/AcademicBackground';
import { WorkExperience } from './Components/Main/WorkExperience';
import { SkillSet } from './Components/Main/SkillSet';


export const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/academic-background" element={<AcademicBackground />} />
    <Route path="/work-experience" element={<WorkExperience />} />
    <Route path="skillset" element={<SkillSet />} />
  </Routes>
  );
}