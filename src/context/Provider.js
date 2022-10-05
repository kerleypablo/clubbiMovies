import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getFilms } from '../Services/filmesServices';

function Provider({ children }) {
  const [filmes, setfilmes] = useState([]);
  const [filterFilmes, setFilterFilmes] = useState([]);
  const [diretores, setDiretores] = useState([]);
  const [ano, setAno] = useState([]);
  const [score, setSetscore] = useState([]);
  const [search, setSearch] = useState({
    inputText: '',
    director: '',
    ano: 0,
    score: '',
  });

  const getallFilms = async () => {
    const data = await getFilms();
    setfilmes(data);
    data.map((film) => (ano.push(film.release_date)));
    const filtroAno = ano.filter((elem, index, self) => index === self.indexOf(elem));
    setAno(filtroAno);
    data.map((film) => (score.push(film.rt_score)));
    const filtroScore = score.filter((elem, index, self) => index === self.indexOf(elem));
    setSetscore(filtroScore);
    data.map((film) => (diretores.push(film.director)));
    const filtro = diretores.filter((elem, index, self) => index === self.indexOf(elem));
    setDiretores(filtro);
    return data;
  };

  useEffect(() => {
    getallFilms();
  }, []);

  const state = useMemo(() => ({
    filmes,
    setfilmes,
    search,
    setSearch,
    filterFilmes,
    setFilterFilmes,
    diretores,
    ano,
    score,
  }), [filmes, filterFilmes, search]);

  return (
    <div>
      <Context.Provider value={state}>
        { children }
      </Context.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
