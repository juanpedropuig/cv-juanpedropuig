import React, { useContext } from 'react';
import { GrReactjs } from 'react-icons/gr';
import { EnglishContext } from '../EnglishContext';

export const Footer = () => {
  const { english } = useContext(EnglishContext);

  return (
    <footer className="footer">
      <p>{english ? 'Made by Juan Pedro Puig with React' : 'Hecho por Juan Pedro Puig con React'}</p>
      <GrReactjs className="reactIcon" size={14} color="cyan" />
      <p id="announcement">{english ? '...(soon responsive)' : '...(próximamente responivo)'}</p>
    </footer>
  );
}