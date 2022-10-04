import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Styles/Card.css';

export default function Card({ img = '', title = '', page = '' }) {
  return (
    <div className="Card_Box">
      <Link to={page}>
        <div className="card">
          <div className="img-container">
            <img src={img} alt="filmes" />
          </div>
        </div>
        <div className="Card_title">
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
