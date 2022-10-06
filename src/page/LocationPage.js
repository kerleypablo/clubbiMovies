import React, { useContext } from 'react';
import Header from '../Components/Header';
import Context from '../context/Context';
import LoadingPage from './loadingPage';
import CardLocation from '../Components/CardLocation';
import Filtros from '../Components/Filtros';
import './Styles/FilmsPage.css';

export default function LocationPage() {
  const { location } = useContext(Context);
  const { search } = useContext(Context);
  const {
    inputText, clima, water, terreno,
  } = search;

  return (
    <div>
      { !location ? (
        <LoadingPage />)
        : (
          <div>
            <Header title="Locacao" />
            <Filtros atores={false} filmes={false} location />
            <div className="filmesConteiner">
              { location.filter((elemente) => elemente.name.includes(!inputText ? '' : inputText))
                .filter((elemente) => elemente.climate.includes(!clima ? '' : clima))
                .filter((elemente) => elemente.surface_water.includes(!water ? '' : water))
                .filter((elemente) => elemente.terrain.includes(!terreno ? '' : terreno))
                .map((loc, index) => (
                  <div key={loc.id}>
                    <CardLocation className="card" blockbutton={false} locate={loc} id={index} />
                  </div>
                ))}
            </div>
          </div>
        )}
    </div>
  );
}
