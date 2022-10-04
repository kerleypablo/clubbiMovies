import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getFilms } from '../Services/filmesServices';

function Provider({ children }) {
  const [filmes, setfilmes] = useState([]);

  const getallFilms = async () => {
    const data = await getFilms();
    setfilmes(data);
    return data;
  };

  useEffect(() => {
    getallFilms();
  }, []);

  const state = useMemo(() => ({
    filmes,
    setfilmes,
  }), [filmes]);

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
