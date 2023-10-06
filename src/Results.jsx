import Pet from "./Pet";

import React from "react";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Pets not found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
