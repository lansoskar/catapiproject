import React, { useState } from "react";
import axios from "axios";

function Filter(images, updatedImages) {
  // hold øje med ændringer i valgt katterace
  const [selectedRace, setSelectedRace] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  // hold øje med ændringer i valgt dropdownmenu item
  const handleRaceChange = (event) => {
    setSelectedRace(event.target.value);
    console.log(event.target.value);
  };

  const handleFilter = () => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids={selectedRace}&api_key=live_AB1V69nMnFMQKQe5C9cnFFiMzCIlx0b4oCRRliFc9edBHuSzydNlRlMqkwEe3JJq`
      )
      .then((Response) => {
        setFilteredImages(Response.data);
        console.log(Response.data);
      })
      // får et tomt array tilbage, virker fint når jeg selv putter det i browseren med en race id

      .catch((error) => {
        console.log("error fetching filtered cat images", error);
      });
  };

  return (
    <div className="filter-container">
      <label htmlFor="catRaceSelect">Vælg katterace: </label>
      <select
        id="catRaceSelect"
        value={selectedRace}
        onChange={handleRaceChange}
      >
        <option value="">-- Vælg Katterace --</option>
        <option value="chau">Chausie</option>
        <option value="bure">Burmese</option>
        <option value="cypr">Cyprus</option>
      </select>
      <button onClick={handleFilter} className="btn btn-primary mt-2">
        Find billeder
      </button>

      {/*filtrerede billeder*/}
      <div className="filtered-images">
        {filteredImages.map((image) => (
          <img key={image.id} src={image.url} alt="Cat" />
        ))}
      </div>
    </div>
  );
}

export default Filter;
