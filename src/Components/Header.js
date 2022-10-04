import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Styles/Header.css';

export default function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <header>
        <div className="header_boxLink">
          <Link className="header_link" to="/filmes">Filmes</Link>
          <Link className="header_link" to="/atores">Atores/Atrizes</Link>
          <Link className="header_link" to="/filmes">Locacoes</Link>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
