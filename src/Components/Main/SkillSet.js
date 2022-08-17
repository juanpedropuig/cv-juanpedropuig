import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { EnglishContext } from "../../EnglishContext";
import { Sidebar } from "../Sidebar";
import { Tech } from './Tech';
import { Footer } from "../Footer";

import analyticsLogo2 from '../../Images/Certifications/analyticsLogo2.png';
import dataStudioLogo from '../../Images/Certifications/dataStudioLogo.png';
import gadsLogo from '../../Images/Certifications/gadsLogo.png';

export const SkillSet = () => {
  const { theme } = useContext(ThemeContext);
  const { english } = useContext(EnglishContext);

  return (
    <div className={`App theme-${theme}`}>
      <Sidebar />
      <main className="curricular">
        <h2>{english ? 'Skills' : 'Habilidades'}</h2>
        <article className="skills activities">
          <section className="activity" id="softskills">
            <h3>{english ? 'Soft skills' : 'Habilidades blandas'}</h3>
            <ul>
              {english ?
                softSkills.map((skill, index) => <li className="skill" key={'ss' + index}>{skill}</li>) :
                habilidadesBlandas.map((habilidad, index) => <li className="skill" key={'ss' + index}>{habilidad}</li>)}
            </ul>
          </section>
          <section className="activity" id="technologies">
            <h3>{english ? 'Technologies' : 'Tecnologías'}</h3>
            <Tech />
          </section>
          <section className="activity" id="certifications">
            <h3>{english ? 'Certifications' : 'Certificaciones'}</h3>
            <ul>
              {certifications.map((certification, index) => <li className="certification" key={'c' + index}>
                <img src={certLogos[index]} alt={certLogos} className="certLogo" /> {certification}
                </li>)}
            </ul>
            </section>
          <section className="activity" id="languages">
            <h3>{english ? 'Languages' : 'Idiomas'}</h3>
            <ul>
              {english ?
                languages.map((language, index) => <li className="language" id={'l'+index} key={'l' + index}>{language}</li>) :
                idiomas.map((idioma, index) => <li className="language" id={'l'+index} key={'l' + index}>{idioma}</li>)}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>    
  );
}

const softSkills = [
  'Analitical and critical thinking.',
  'Problem solving.',
  'Communication, collaboration and teamwork',
  'Flexibility and adaptability.',
  'Expertise in customer service.'
];
const habilidadesBlandas = [
  'Pensamiento crítico y analítico.',
  'Resolución de problemas.',
  'Comunicación y trabajo en equipo.',
  'Flexibilidad y adaptabilidad.',
  'Experiente en atención al cliente.'
];

const certifications = [
  'Google Analytics',
  'Google Data Studio',
  'Google Ads Display'
];

const certLogos = [
  analyticsLogo2,
  dataStudioLogo,
  gadsLogo
];

const languages = [
  'English: Advanced',
  'Certificate of Proficiency in English (CPE) - Dec/2019',
  'Spanish: Native'
];
const idiomas = [
  'Inglés: Avanzado',
  'Certificate of Proficiency in English (CPE) - Dic/2019',
  'Español: Nativo'
];