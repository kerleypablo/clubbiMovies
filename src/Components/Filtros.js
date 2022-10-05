import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Filtros() {
  const { search, setSearch } = useContext(Context);
  const { diretores, ano, score } = useContext(Context);
  const { inputText } = search;

  const handleInput = ({ target }) => {
    setSearch({ ...search, [target.name]: target.value });
  };

  const handleSelect = ({ target }) => {
    setSearch({ ...search, [target.name]: target.value });
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
        <label htmlFor="director">
          diretores:
          <select
            name="director"
            onChange={handleSelect}
          >
            <option value="">Diretores</option>
            {diretores.map((film, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={film}>{film}</option>
            ))}
          </select>
        </label>
        <label htmlFor="ano">
          Ano Lancamento:
          <select
            name="ano"
            onChange={handleSelect}
          >
            <option value="">0</option>
            {ano.map((film, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={film}>{film}</option>
            ))}
          </select>
        </label>
        <label htmlFor="score">
          Score:
          <select
            name="score"
            onChange={handleSelect}
          >
            <option value="">0</option>
            {score.map((film, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={film}>{film}</option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
