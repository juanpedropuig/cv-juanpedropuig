import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { EnglishContext } from "../../EnglishContext";
import { Sidebar } from '../Sidebar';
import { Footer } from "../Footer";
import { Job } from './Job';

export const WorkExperience = () => {
  const { theme } = useContext(ThemeContext);
  const { english } = useContext(EnglishContext);

  return (
    <div className={`App theme-${theme}`}>
      <Sidebar />
      <main className="curricular">
        <h2>{english ? 'Work experience' : 'Experiencia laboral'}</h2>
        <article className="jobs activities">
          {english ? jobs.map((job, index) => <Job job={job} ind={index} key={index} />) :
            trabajos.map((trabajo, index) => <Job job={trabajo} ind={index} key={index} />)}
        </article>
      </main>
      <Footer />
    </div>
  );
}

const jobs = [
  {
    position: 'Media Planner',
    company: 'Wasabi Digital - Montevideo, Uy',
    time: 'May 2021-today',
    reference: '',
    task1: ' In charge of media planning and budgets for more than 10 accounts.',
    task2: 'Brainstorm and appplication of creative solutions to achieve results.',
    task3: ' Knowledge and application of tracking tools to achieve better results.'
  },
  {
    position: 'Reprogramming team member',
    company: 'SAREA - Montevideo, Uy',
    time: 'July 2019-October 2019',
    reference: 'Luis Labadie - 094445907',
    task1: 'Tracking and contacted customers to guide them in the reprogramming process of their POS device.',
    task2: '',
    task3: ''
  },
  {
    position: 'Kitchen porter | Bartender',
    company: 'Treble Cone - Wanaka, NZ',
    time: 'June 2018 - October 2018',
    reference: 'Oliver Deakin - oliverdeakin.od@googlemail.com',
    task1: 'Performed chores as kitchen porter and as a bartender.',
    task2: 'In charge of keeping stock of food, kitchenware, chemical and cleaning products.',
    task3: ''
  },
  {
    position: 'Customer service',
    company: 'Abitab - Montevideo, Uy',
    time: 'June 2017 - December 2017',
    reference: 'Martha Pesce - marthapesce@gmail.com',
    task1: 'Performed chores as a cashier dealing with large quantities of money' +
      'and as a bookmaker of national lottery tickets',
    task2: '',
    task3: ''
  }
];
const trabajos = [
  {
    position: 'Media Planner',
    company: 'Wasabi Digital - Montevideo, Uy',
    time: 'Mayo 2021-presente',
    reference: '',
    task1: 'Encargado de la parte de medios en más de 10 cuentas, en ' + 
      'responsabilidad de la planificación estratégica y sus presupuestos.',
    task2: 'Idear y aplicar soluciones creativas para conseguir resultados.',
    task3: 'Conocimiento y uso de herramientas de trackeo para obtener mejores resultados.'
  },
  {
    position: 'Integrante del equipo de reprogramación',
    company: 'SAREA - Montevideo, Uy',
    time: 'Julio 2019-Octubre 2019',
    reference: 'Luis Labadie - 094445907',
    task1: 'Rastreo y contacto de clientes para guiarlos en la reprogramación de su equipo POS.',
    task2: '',
    task3: ''
  },
  {
    position: 'Ayudante de cocina | Bartender',
    company: 'Treble Cone - Wanaka, NZ',
    time: 'Junio 2018 - Octubre 2018',
    reference: 'Oliver Deakin - oliverdeakin.od@googlemail.com',
    task1: 'Realizar tareas de ayudante de cocina como de bartender.',
    task2: 'Encargado del stock de alimentos, material de cocina, productos químicos y de limpieza.',
    task3: ''
  },
  {
    position: 'Atención al cliente',
    company: 'Abitab - Montevideo, Uy',
    time: 'Junio 2017 - Diciembre 2017',
    reference: 'Martha Pesce - marthapesce@gmail.com',
    task1: ' Realizar tareas de cajero con grandes sumas de dinero, ' + 
      'así como vendedor de diferentes juegos de quiniela.',
    task2: '',
    task3: ''
  }
];