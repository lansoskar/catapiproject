import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Paragraph from "./components/Paragraph";
import Filter from "./components/Filter";
import BasicImageGetter from "./components/BasicImageGetter";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Cat Api Project
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Hjem
                </a>
              </li>
              <li className="nav-item">
                <a href="/favorites" className="nav-link">
                  Favoritter
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="max-width-container">
        <Paragraph />
      </div>
      <div className="max-width-container">
        <Filter />
      </div>
      <div className="general-image-container">
        <BasicImageGetter />
      </div>
    </div>
  );
}

export default App;
