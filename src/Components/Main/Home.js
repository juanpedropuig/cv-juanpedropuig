import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { EnglishContext } from "../../EnglishContext";
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';

import fotoCV3 from '../../Images/fotoCV3.png';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { english } = useContext(EnglishContext);

  return (
    <div  className={`App theme-${theme}`}>
      <Sidebar />
      <main className="home">
        <section className="intro">
          <h1>Juan Pedro Puig</h1>
          <br />
          <h3>{english ? 'Second year student of Computer Science at ORT University.' : 'Estudiante de 2° año de la carrera de Ingeniería en sistemas en Universidad ORT.'}</h3>
          <br />
          <h4>{english ? 'First year completed with an average of 97/100' : 'Primer año aprobado con promedio de 97/100.'}</h4>
        </section>
        <img src={fotoCV3} alt="cv" />
        <section className="contact">
          <p><b>Email:</b> jppuigpesce@gmail.com</p>
          <p><b>{english ? 'Cellphone number' : 'Celular'}:</b> (+598) 098600681</p>
          <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/juan-pedro-puig/" target="_blank" rel='noreferrer'>linkedin.com/in/juan-pedro-puig</a>
          <br /> 
          <b>Github:</b> <a href="https://github.com/juanpedropuig?tab=repositories" target="=_blank" rel='noreferrer'>github.com/juanpedropuig</a>
          <br />
          <br />
          <a href={english ? '../../CV/juanpedropuigResume.pdf' : '../../CV/juanpedropuigCV.pdf'} download><b>{english ? 'Download resume' : 'Descargar CV'}</b></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}