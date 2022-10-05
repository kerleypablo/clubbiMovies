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
    idade, cabelo,
    olho, inputText,
  } = search;
  return (
    <div>
      { !actors ? (
        <LoadingPage />)
        : (
          <div>
            <Header title="Atores/Atrizes" />
            <Filtros atores />
            <div className="filmesConteiner">
              { actors.filter((elemente) => elemente.name.includes(!inputText ? '' : inputText))
                .filter((elemente) => elemente.eye_color.includes(!olho ? '' : olho))
                .filter((elemente) => elemente.hair_color.includes(!cabelo ? '' : cabelo))
                .filter((elemente) => elemente.age.includes(!idade ? '' : idade))
                // .filter((elemente) => elemente.gender.includes(!sexo ? '' : sexo))
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
