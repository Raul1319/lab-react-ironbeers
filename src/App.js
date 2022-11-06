
import './App.css';
import axios from 'axios';
import { Routes, Route, Form, useFormAction, createRoutesFromElements } from 'react-router-dom';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import CreateBeers from './components/CreateBeers';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react'


function App() {

  const [beers, setBeers] = useState([])
  return (
    <div className="App">

    <header>
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/beers" element={<BeersList />} />
     <Route path="/random-beer" element={<RandomBeer />} />
     <Route path="/create-beers" element={<CreateBeers />} />

    </Routes>


    </header>
      
    </div>
  );
}

export default App;
