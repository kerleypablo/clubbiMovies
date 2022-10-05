import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getFilms } from '../Services/filmesServices';
import { getActor } from '../Services/ActorServices';
import { getSpecied } from '../Services/SpeciesServices';

function Provider({ children }) {
  const [filmes, setfilmes] = useState([]);
  const [actors, setActor] = useState([]);
  const [diretores, setDiretores] = useState([]);
  const [ano, setAno] = useState([]);
  const [idade, setIdade] = useState([]);
  const [cabelo, setCabelo] = useState([]);
  const [score, setSetscore] = useState([]);
  const [sexoAc, setSexoAC] = useState([]);
  const [filterFilmes, setFilterFilmes] = useState([]);
  const [filterSpecies] = useState([]);
  const [search, setSearch] = useState({
    inputText: '',
    director: '',
    ano: 0,
    score: '',
    idade: '',
    cabelo: '',
    filme: '',
    sex: '',
    specie: '',
    olho: '',
  });

  const getallActor = async () => {
    const data = await getActor();
    setActor(data);
    data.map((act) => (idade.push(act.age)));
    const filtroidade = idade.filter((elem, index, self) => index === self.indexOf(elem));
    setIdade(filtroidade.sort());
    data.map((act) => (cabelo.push(act.hair_color)));
    const filtroHair = cabelo.filter((elem, index, self) => index === self.indexOf(elem));
    setCabelo(filtroHair.sort());
    data.map((act) => (sexoAc.push(act.gender)));
    const filtrogender = sexoAc.filter((elem, index, self) => index === self.indexOf(elem));
    setSexoAC(filtrogender.sort());
    return data;
  };

  const getAllSpecies = async () => {
    const data = await getSpecied();
    data.map((spc) => {
      const obj = { id: spc.id, name: spc.name };
      filterSpecies.push(obj);
      return null;
    });
  };

  const getallFilms = async () => {
    const data = await getFilms();
    setfilmes(data);
    data.map((film) => (ano.push(film.release_date)));
    const filtroAno = ano.filter((elem, index, self) => index === self.indexOf(elem));
    setAno(filtroAno.sort());
    data.map((film) => (score.push(film.rt_score)));
    const filtroScore = score.filter((elem, index, self) => index === self.indexOf(elem)).sort();
    setSetscore(filtroScore);
    data.map((film) => (diretores.push(film.director)));
    const filtro = diretores.filter((elem, index, self) => index === self.indexOf(elem)).sort();
    setDiretores(filtro);
    data.map((film) => {
      const obj = { id: film.id, name: film.title };
      filterFilmes.push(obj);
      return null;
    });
    return data;
  };

  useEffect(() => {
    getallFilms();
    getallActor();
    getAllSpecies();
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
    sexoAc,
    filterSpecies,
  }), [filmes, search, actors]);

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
