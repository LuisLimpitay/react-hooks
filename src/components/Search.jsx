import React from "react";

//search=valor de useState, searchInput=referencia useReff, y el llamado que es handleSearch
const Search = ({search, searchInput, handleSearch}) => {
    return (
        <div className="Search">
          <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
        </div>
      );
}

export default Search;