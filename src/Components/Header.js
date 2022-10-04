import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Header.css';

export default function Header() {
  return (
    <header>
      <div className="header_boxLink">
        <Link className="header_link" to="filmes">Filmes</Link>
        <Link className="header_link" to="atores">Atores/Atrizes</Link>
        <Link className="header_link" to="filmes">Locacoes</Link>
      </div>
    </header>
  );
}
