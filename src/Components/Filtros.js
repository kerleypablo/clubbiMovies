import React, { useContext } from 'react';

export default function Filtros() {
const {search, setSearch } = useContext(Context);
 const handleInput = ({target}) => {

 }

  return (
    <section>
      <div className="box_inputtext">
        <label htmlFor="searcheInput">
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleInput}
          />
        </label>
      </div>
    </section>
  );
}
