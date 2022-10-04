import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Context from '../context/Context';
import LoadingPage from './loadingPage';
import CardFilmes from '../Components/CardFilmes';
import './Styles/FilmsPage.css';

export default function FilmPage() {
  const { filmes } = useContext(Context);

  useEffect(() => {
  }, []);

  return (
    <div>
      { !filmes ? (
        <LoadingPage />)
        : (
          <div>
            <Header title="Filmes" />
            <div className="filmesConteiner">
              { filmes.map((film, index) => (
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
