import React from "react";
import Card from "../Card/Card";
import "./List.css";

const List = ({ filteredCharacter }) => {
  return (
    <div className="list">
      {filteredCharacter.map((char) => {
        return (
          <Card
            id={char.id}
            name={char.name}
            img={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          />
        );
      })}
    </div>
  );
};

export default List;
