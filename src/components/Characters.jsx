import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  //9.1
  const searchInput = useReducer(null);
  //8.1
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  //8.2 ==> 9.3 dejo de usar event para usar el hooks
  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  //8.4 crear filtros
  const filteredUsers = useMemo(() => characters.filter((user) => 
      {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      {/*8.3 agrega input, usa el onChange por que cuando se termine de tipear desencadena el llamado*/}      
      <div className="Search">
        {/* 9.2 agrego ref , el value va  va a estar dentro del valor que regresa ref */}
        <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
      </div>
      {filteredUsers.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            Agregar a Favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
