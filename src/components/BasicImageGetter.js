import React, { useState, useEffect } from "react";
import axios from "axios";

function BasicImageGetter({ images }) {
  const [catImages, setCatImages] = useState([]);
  useEffect(() => {
    // brug useEffect så den kun bliver kaldet når komponent mounter
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => {
        // put billederne i state
        setCatImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
      });
  }, []); // <-- tomt dependency array for at være sikker på at det kun køre 1 gang

  const handleFavoriteChange = (imageId) => {
    // toggle om billedet er en favorit og gem localt hvis ja til favoritsiden
    const updatedImages = catImages.map((image) =>
      image.id === imageId ? { ...image, favorite: !image.favorite } : image
    );
    setCatImages(updatedImages);

    // gem locally delen
    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedImages.filter((image) => image.favorite))
    );
  };

  return (
    // brug map for at iterer igennem array
    <div className="row">
      {catImages.map((image) => (
        <div key={image.id} className="col-md-4 mb-3">
          <div className="card">
            <img
              src={image.url}
              className="card-img-top"
              alt="Cat"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`favorite-${image.id}`}
                checked={image.favorite || false}
                onChange={() => handleFavoriteChange(image.id)}
              />
              <label
                className="form-check-label"
                htmlFor={`favorite-${image.id}`}
              >
                Like
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BasicImageGetter;
