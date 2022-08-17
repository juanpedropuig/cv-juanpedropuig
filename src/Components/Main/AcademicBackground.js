import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { EnglishContext } from "../../EnglishContext";
import { Sidebar } from "../Sidebar";
import { Footer } from "../Footer";
import { Study } from "./Study";

export const AcademicBackground = () => {
  const { theme } = useContext(ThemeContext);
  const { english } = useContext(EnglishContext);

  return (
    <div className={`App theme-${theme}`}>
      <Sidebar />
      <main className="curricular">
        <h2>{english ? 'Academic background' : 'Formación académica'}</h2>
        <article className="studies activities">
            {english ?
              studies.map((study, index) => <Study study={study} ind={index} key={index} />) :
              estudios.map((estudio, index) => <Study study={estudio} ind={index} key={index} />)}
        </article>
      </main>
      <Footer />
    </div>
  );
}

const studies = [
  {
    title: 'Computer Science Engineer',
    year: 'August 2021-today',
    institution: 'ORT University'
  },
  {
    title: 'Degree in Communications',
    year: '2019-2022 (3° year in studies completed, abandoned)',
    institution: 'Faculty of Information and Communications'
  },
  {
    title: 'Full Stack Engineer',
    year: '2020',
    institution: 'Codecademy'
  },
  {
    title: 'High School',
    year: '2010-2015',
    institution: 'Maristas Zorrilla de San Martín High School'
  },
];
const estudios = [
  {
    title: 'Ingeniería en Sistemas',
    year: 'Agosto 2021-presente',
    institution: 'Universidad ORT'
  },
  {
    title: 'Licenciatura en Comunicación',
    year: '2019-2022 (Sin finalizar, 3° año completo)',
    institution: 'Facultad de Información y Comunicación'
  },
  {
    title: 'Full Stack Engineer',
    year: '2020',
    institution: 'Codecademy'
  },
  {
    title: 'Educación secundaria',
    year: '2010-2015',
    institution: 'Liceo Maristas Zorrilla de San Martín'
  },
];