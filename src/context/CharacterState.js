import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterContext from "./CharacterContext";
import { shuffle } from "lodash";

const CharacterState = ({ children }) => {
  const [character, setCharacter] = useState([]);
  const getCharacters = async () => {
    const url =
      "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=5bfdbd96b9a801b988f0335d0c30df9c&hash=59dacb369518dd4a417d66fc9bf1bd41";
    try {
      const response = await axios.get(url);
      setCharacter(shuffle(response.data.data.results));
    } catch (error) {}
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        getCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
