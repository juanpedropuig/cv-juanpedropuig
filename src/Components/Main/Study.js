import React from "react";

export const Study = ({ study, ind }) => {
  const { title, year, institution } = study;
  return (
    <section className="activity" id={'study' + ind}>
      <h3>{title}</h3>
      <h5>{year}</h5>
      <h5>{institution}</h5>
    </section>
  );
}