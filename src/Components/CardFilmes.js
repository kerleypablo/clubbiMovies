import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Styles/cardFilm.css';

export default function CardFilmes({ filme, blockbutton = false }) {
  const navigate = useNavigate();
  const [infoPainel, setInfoPainel] = useState('painel');
  const [ativado, setAtivado] = useState(false);

  const clickCard = () => {
    if (infoPainel === 'active_painel') {
      setInfoPainel('painel');
      setAtivado(false);
    } else {
      setInfoPainel('active_painel');
      setAtivado(true);
    }
  };

  useEffect(() => {
  }, [ativado]);

  return (
    <div className="conteiner">
      <div className={infoPainel}>
        <button className="cardButton" type="button" onClick={clickCard} disabled={blockbutton}>
          <img className="Cardfilm_img" src={filme.image} alt={filme.description} />
        </button>
        { !ativado ? (null)
          : (
            <div className="Cardinfo">
              <h3>{filme.title}</h3>
              <h5>{filme.original_title}</h5>
              <h4>
                director:
                {' '}
                {filme.director}
              </h4>
              <span>{filme.description}</span>
              <div className="info2">
                <p>
                  Producer:
                  {' '}
                  {filme.producer}
                </p>
                <p>
                  release:
                  {' '}
                  {filme.release_date}
                </p>
                <p>
                  duration:
                  {' '}
                  {filme.running_time}
                </p>
              </div>
              <div className="buttonCard">
                <button type="button" onClick={() => navigate(`/filme/${filme.id}`)}>saiba Mais</button>
              </div>
              <div className="CardScore">
                <p>
                  Score:
                  {'  '}
                  {filme.rt_score}
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

CardFilmes.propTypes = {
  filme: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    movie_banner: PropTypes.string,
    original_title: PropTypes.string,
    original_title_romanised: PropTypes.string,
    producer: PropTypes.string,
    release_date: PropTypes.string,
    rt_score: PropTypes.string,
    running_time: PropTypes.string,
  }).isRequired,
  blockbutton: PropTypes.bool.isRequired,
};
