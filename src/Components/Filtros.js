import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import './Styles/filtros.css';

export default function Filtros({ filmes = false, atores = false, location = false }) {
  const { search, setSearch } = useContext(Context);
  const {
    diretores, ano, score, idade, cabelo, filterFilmes, filterSpecies, clima, water, terrain,
  } = useContext(Context);

  const { inputText } = search;
  const handleInput = ({ target }) => {
    setSearch({ ...search, [target.name]: target.value });
  };

  const handleSelect = ({ target }) => {
    setSearch({ ...search, [target.name]: target.value });
  };

  const selecFilms = (label, optdefaul, tipo) => {
    const result = (
      <label htmlFor={label}>
        {label}
        :
        <select
          name={label}
          onChange={handleSelect}
        >
          <option value="">{optdefaul}</option>
          {tipo.map((idad, index) => (
          // eslint-disable-next-line react/no-array-index-key
            <option key={index} value={idad.id}>{idad.name}</option>
          ))}
        </select>
      </label>
    );
    return result;
  };

  const selecAux = (label, optdefaul, tipo) => {
    const result = (
      <label htmlFor={label}>
        {label}
        :
        <select
          name={label}
          onChange={handleSelect}
        >
          <option value="">{optdefaul}</option>
          {tipo.map((idad, index) => (
          // eslint-disable-next-line react/no-array-index-key
            <option key={index} value={idad}>{idad}</option>
          ))}
        </select>
      </label>
    );
    return result;
  };

  const clrear = () => {
    const clear = {
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
      clima: '',
      water: '',
      terreno: '',
    };
    setSearch(clear);
  };

  return (
    <section>
      <div className="box_inputtext">
        <label htmlFor="searcheInput">
          Pesquisa
          <input
            type="text"
            name="inputText"
            value={inputText}
            onChange={handleInput}
          />
        </label>
        { !filmes
          ? (null)
          : (
            <>
              {selecAux('director', 'Diretor', diretores)}
              {selecAux('ano', 'ANO', ano)}
              {selecAux('score', 'Score', score)}
            </>
          )}
        { !atores ? (null)
          : (
            <div className="searchSelect">
              <div>
                {selecAux('cabelo', 'COR-CABELO', cabelo)}
                {selecAux('idade', 'IDADE', idade)}
              </div>
              {/* {selecAux('sex', 'sex', sexoAc)} */}
              {selecFilms('filme', 'filme', filterFilmes)}
              {selecFilms('specie', 'specie', filterSpecies)}
            </div>
          )}
        {
        !location ? (null)
          : (
            <div className="searchSelect">
              {selecAux('clima', 'Clima', clima)}
              {selecAux('water', 'surface_water', water)}
              {selecAux('terreno', 'Terreno', terrain)}
            </div>
          )
      }
        <button className="clear_button" type="button" onClick={clrear}>Limpar</button>
      </div>
    </section>
  );
}

Filtros.propTypes = {
  filmes: PropTypes.bool.isRequired,
  atores: PropTypes.bool.isRequired,
  location: PropTypes.bool.isRequired,
};
