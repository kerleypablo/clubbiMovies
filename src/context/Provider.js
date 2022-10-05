import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getFilms } from '../Services/filmesServices';
import { getActor } from '../Services/ActorServices';

function Provider({ children }) {
  const [filmes, setfilmes] = useState([]);
  const [actors, setActor] = useState([]);
  const [filterFilmes, setFilterFilmes] = useState([]);
  const [diretores, setDiretores] = useState([]);
  const [ano, setAno] = useState([]);
  const [idade, setIdade] = useState([]);
  const [cabelo, setCabelo] = useState([]);
  const [score, setSetscore] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [search, setSearch] = useState({
    inputText: '',
    director: '',
    ano: 0,
    score: '',
    idade: '',
    cabelo: '',
    filme: '',
    sexo: '',
    specie: '',
    olho: '',
  });

  const getallActor = async () => {
    const data = await getActor();
    setActor(data);
    data.map((film) => (idade.push(film.age)));
    const filtroidade = idade.filter((elem, index, self) => index === self.indexOf(elem));
    setIdade(filtroidade);
    data.map((film) => (sexo.push(film.hair_color)));
    const filtroHair = cabelo.filter((elem, index, self) => index === self.indexOf(elem));
    setCabelo(filtroHair);
    data.map((film) => (sexo.push(film.gender)));
    const filtrogender = sexo.filter((elem, index, self) => index === self.indexOf(elem));
    setSexo(filtrogender);
    return data;
  };

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
    getallActor();
  }, []);

  const state = useMemo(() => ({
    filmes,
    setfilmes,
    actors,
    setActor,
    search,
    setSearch,
    filterFilmes,
    setFilterFilmes,
    diretores,
    ano,
    score,
    idade,
    cabelo,
    sexo,
  }), [filmes, filterFilmes, search, actors]);

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
