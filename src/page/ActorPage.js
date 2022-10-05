import React, { useContext } from 'react';
import Header from '../Components/Header';
import Context from '../context/Context';
import LoadingPage from './loadingPage';
import CardActors from '../Components/CardActors';
import Filtros from '../Components/Filtros';
import './Styles/FilmsPage.css';

export default function FilmPage() {
  const { actors } = useContext(Context);
  const { search } = useContext(Context);
  const {
    idade, cabelo, inputText, filme, specie,
  } = search;

  return (
    <div>
      { !actors ? (
        <LoadingPage />)
        : (
          <div>
            <Header title="Atores/Atrizes" />
            <Filtros atores filmes={false} />
            <div className="filmesConteiner">
              { actors.filter((elemente) => elemente.name.includes(!inputText ? '' : inputText))
                .filter((elemente) => elemente.hair_color.includes(!cabelo ? '' : cabelo))
                .filter((elemente) => elemente.age.includes(!idade ? '' : idade))
                .filter((elemente) => elemente.films[0].slice(37).includes(!filme ? '' : filme))
                .filter((elemente) => elemente.species.slice(40).includes(!specie ? '' : specie))
                // .filter((elemente) => elemente.gender.includes(!sex ? '' : sex))
                .map((act, index) => (
                  <div key={act.id}>
                    <CardActors className="card" actor={act} id={index} />
                  </div>
                ))}
            </div>
          </div>
        )}
    </div>
  );
}
