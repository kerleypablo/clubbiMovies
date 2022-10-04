import React from 'react';
import './Styles/loadingPage.css';

export default function loadingPage() {
  return (
    <div className="popcorn">
      <img src="https://i.pinimg.com/originals/16/07/15/160715bf020415b2fcfb91923319731b.gif" alt="loading" />
      <h3>carregando...</h3>
    </div>
  );
}
