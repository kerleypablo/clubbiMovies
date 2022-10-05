import React, { useContext } from 'react';
import Header from '../Components/Header';
import Context from '../context/Context';
import LoadingPage from './loadingPage';
import CardFilmes from '../Components/CardFilmes';
import Filtros from '../Components/Filtros';
import './Styles/FilmsPage.css';

export default function FilmPage() {
  const { filmes } = useContext(Context);
  const { search } = useContext(Context);
  const {
    inputText, director, ano, score,
  } = search;

  return (
    <div>
      { !filmes ? (
        <LoadingPage />)
        : (
          <div>
            <Header title="Filmes" />
            <Filtros filmes />
            <div className="filmesConteiner">
              { filmes.filter((elemente) => elemente.title.includes(!inputText ? '' : inputText))
                .filter((elemente) => elemente.director.includes(!director ? '' : director))
                .filter((elemente) => elemente.release_date.includes(!ano ? '' : ano))
                .filter((elemente) => elemente.rt_score.includes(!score ? '' : score))
                .map((film, index) => (
                  <div key={film.id}>
                    <CardFilmes className="card" filme={film} id={index} />
                  </div>
                ))}
            </div>
          </div>
        )}
    </div>
  );
}
