import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { getFilmsById } from '../Services/filmesServices';
import { getActorById } from '../Services/ActorServices';
import { terreno } from '../helper/images';
import CardFilmes from './CardFilmes';
import './Styles/cardFilm.css';

export default function CardLocation({ locate, blockbutton = false }) {
  const navigate = useNavigate();
  const [infoPainel, setInfoPainel] = useState('painel');
  const [locFil] = useState([]);
  const [locAct] = useState([]);
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

  const getFilmes = async () => {
    locate.films.map(async (film) => {
      const data = await getFilmsById(film);
      locFil.push(data);
    });
  };

  const getAllActor = async () => {
    locate.residents.map(async (act) => {
      const data = await getActorById(act);
      locAct.push(data);
    });
  };

  useEffect(() => {
    getFilmes();
    getAllActor();
  }, []);

  useEffect(() => {
  }, [ativado, locFil]);

  return (
    <div className="conteiner">
      <div className={infoPainel}>
        <button className="cardButton" type="button" onClick={clickCard} disabled={blockbutton}>
          <img className="Cardfilm_img" src={terreno} alt={locate.name} />
          <p className="painelName">{locate.name}</p>
        </button>
        { !ativado ? (null)
          : (
            <div className="Cardinfo">
              <h3>{locate.name}</h3>
              <h5>{locate.terrain}</h5>
              <h4>
                clima:
                {' '}
                {locate.climate}
              </h4>
              <span>{locate.name}</span>
              <div className="info2">
                <p>
                  surface_water:
                  {' '}
                  {locate.surface_water}
                </p>
                { !locFil
                  ? (<p> sem filmes </p>)
                  : (
                    locFil.map((film) => (
                      <Link to={`/filmes/${film.id}`} className="cardfilme">
                        <CardFilmes expandbutton={false} filme={film} />
                      </Link>
                    ))
                  )}
              </div>
              { !locAct
                ? (<p> sem filmes </p>)
                : (
                  <div className="boxActorcard">
                    {locAct.map((act) => (
                      <Link to={`/atores/${act.id}`} className="cardfilme">
                        <button type="button">{act.name}</button>
                      </Link>
                    ))}
                  </div>
                )}
              <div className="buttonCard">
                <button type="button" onClick={() => navigate(`/filme/${locate.id}`)}>saiba Mais</button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

CardLocation.propTypes = {
  locate: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    climate: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    residents: PropTypes.arrayOf(
      PropTypes.string,
    ),
    films: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
  blockbutton: PropTypes.bool.isRequired,
};
