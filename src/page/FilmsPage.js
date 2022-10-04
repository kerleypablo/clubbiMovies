import React, { useContext } from 'react';
import Header from '../Components/Header';
import Context from '../context/Context';
import LoadingPage from './loadingPage';

export default function FilmPage() {
  const { filmes } = useContext(Context);
  return (
    !filmes ? (
      <LoadingPage />)
      : (
        <div>
          <Header title="Filmes" />
        </div>
      )
  );
}
