import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import MovieDetails from './components/MovieDetails';


import './assets/item.css';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />} >
      <Route path=":movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
