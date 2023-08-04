import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="TodoSearchContainer">
      <input 
        className="TodoSearchInput" 
        placeholder="Busca tu pendiente" 
        value={searchValue}
        onChange={onSearchInputChange}
      />
    </div>
  );
}

export { TodoSearch };