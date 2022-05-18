import React from "react";
import "./Search.css";

function Search({ search, onChangeSearch }) {
  return (
    <div>
      <input
        className="searchInput"
        placeholder="Buscar..."
        onChange={onChangeSearch}
        value={search}
      ></input>
    </div>
  );
}

export default Search;
