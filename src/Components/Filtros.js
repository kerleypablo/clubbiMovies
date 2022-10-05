import React, { useContext } from 'react';
import Context from '../context/Context';
import './Styles/filtros.css';

export default function Filtros({ filmes = false, atores = false }) {
  const { search, setSearch } = useContext(Context);
  const {
    diretores, ano, score, idade,
  } = useContext(Context);
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
        { !filmes
          ? (null)
          : (
            <>
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
            </>
          )}
        { !atores ? (null)
          : (
            <div>
              <label htmlFor="director">
                idade:
                <select
                  name="idade"
                  onChange={handleSelect}
                >
                  <option value="">IDADE</option>
                  {idade.map((idad, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <option key={index} value={idad}>{idad}</option>
                  ))}
                </select>
              </label>
            </div>
          )}
      </div>
    </section>
  );
}
