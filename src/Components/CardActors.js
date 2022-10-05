import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { getFilmsById } from '../Services/filmesServices';
import { getSpeciedbyId } from '../Services/SpeciesServices';
import CardFilmes from './CardFilmes';
import {
  deer, cat, god, dragon, human, spirit, totoro,
} from '../helper/images';
import './Styles/cardFilm.css';

export default function CardActors({ actor }) {
  const navigate = useNavigate();
  const [infoPainel, setInfoPainel] = useState('painel');
  const [ativado, setAtivado] = useState(false);
  const [actFilm] = useState([]);
  const [igmcard, setImgcard] = useState();
  const [speciesCard, setSpecieCard] = useState();

  const clickCard = () => {
    if (infoPainel === 'active_painel') {
      setInfoPainel('painel');
      setAtivado(false);
    } else {
      setInfoPainel('active_painel');
      setAtivado(true);
    }
  };

  const getActorFilmes = () => {
    actor.films.map(async (film) => {
      const data = await getFilmsById(film);
      actFilm.push(data);
    });
  };

  const CheckSpcies = async () => {
    const species = await getSpeciedbyId(actor.species);
    setSpecieCard(species);
    switch (species.name) {
      case 'Deer':
        setImgcard(deer);
        break;
      case 'Human':
        setImgcard(human);
        break;
      case 'Spirit':
        setImgcard(spirit);
        break;
      case 'God':
        setImgcard(god);
        break;
      case 'Cat':
        setImgcard(cat);
        break;
      case 'Totoro':
        setImgcard(totoro);
        break;
      case 'Dragon':
        setImgcard(dragon);
        break;
      default:
        setImgcard(human);
        break;
    }
  };

  useEffect(() => {
    getActorFilmes();
    CheckSpcies();
  }, []);

  useEffect(() => {
  }, [ativado, actFilm]);

  return (
    <div className="conteiner">
      <div className={infoPainel}>
        <button className="cardButton" type="button" onClick={clickCard}>
          <img className="Cardfilm_img" src={igmcard} alt={actor.name} />
        </button>
        { !ativado ? (null)
          : (
            <div className="Cardinfo">
              <h3>{actor.name}</h3>
              <h5>{actor.gender}</h5>
              <h4>
                Idade:
                {' '}
                {actor.age}
              </h4>
              <span>Filmes</span>
              <div className="info2">
                <p>
                  cor do cabelo:
                  {' '}
                  {actor.hair_color}
                </p>
                <p>
                  specie:
                  {' '}
                  {speciesCard.name}
                </p>
                { !actFilm
                  ? (<p> sem filmes </p>)
                  : (
                    actFilm.map((film) => (
                      <Link to={`/filmes/${film.id}`} className="cardfilme">
                        <CardFilmes expandbutton filme={film} />
                      </Link>
                    ))
                  )}
              </div>
              <div className="buttonCard">
                <button type="button" onClick={() => navigate(`/atores/${actor.id}`)}>saiba Mais</button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

CardActors.propTypes = {
  actor: PropTypes.shape({
    age: PropTypes.string,
    eye_color: PropTypes.string,
    films: PropTypes.arrayOf(
      PropTypes.string,
    ),
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
