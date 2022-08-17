import React from 'react';

export const Job = ({ job, ind }) => {
  const { position, company, time, reference, task1, task2, task3 } = job;

  return (
    <section className="activity" id={'job' + ind}>
      <h3>{position}</h3>
      <h5>{company} | {time}</h5>
      {reference ? <h5>Referencia: {reference}</h5> : null}
      <ul>
        <li>{task1}</li>
        {task2 ? <li>{task2}</li> : null}
        {task3 ? <li>{task3}</li> : null}
      </ul>
    </section>
  );
}