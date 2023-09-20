import React from "react";

function Favorites() {
  // hent lokalt gemte favoritter, kunne gøres med cloud hvis jeg havde tid
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <h1>Dine Favoritter</h1>
      {favorites.map((image) => {
        <div key={image.id}>
          <img src={image.url} alt="fed kat" />
        </div>;
      })}
    </div>
  );
}

export default Favorites;
