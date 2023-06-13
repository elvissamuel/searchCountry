import React, { useEffect, useState } from 'react';
// components
import Nav from './components/Nav';
import Home from './components/Home';
import { CountryContext } from './components/CountryContext';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import CountryDetails from './components/CountryDetails';


const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [displayedItem, setDisplayedItem] = useState(40);
  const [trial, setTrial] = useState(false);
  const [region, setRegion] = useState(null);
  const [regionData, setRegionData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() =>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  // const myRegion = region.toLowerCase();



  useEffect(() => {
    setLoading(true);
    axios.get(`https://restcountries.com/v3.1/all`, {})
    .then((response) => {
      setAllCountries(response.data);
      console.log(allCountries)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(()=>setLoading(false))

  }, [])
  
  useEffect(() => {
    setLoading(true);
    if (region !== null) {
      axios
        .get(`https://restcountries.com/v3.1/region/${region}`)
        .then((response) => {
          setRegionData(response.data);
          console.log(regionData);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  }, [region]);


  const displayedData = allCountries.slice(0, displayedItem);

  const addDisplay = () =>{
    setDisplayedItem((item) => item + 20);
  }
  const displayTen = allCountries.slice(0, 10);

  const contextValues = {isOpen, setIsOpen, allCountries, displayedItem, displayedData, toggleDropdown, addDisplay, displayTen, setRegionData, region, setRegion, searchQuery, handleSearchInput, theme, setTheme, handleThemeSwitch}
  const countryData = region ? regionData : allCountries;

  return (
    
    <div>
      <CountryContext.Provider value={contextValues}>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home myData={region ? regionData : allCountries} />} />
            {countryData.map((country, index) =>{
              return (
                <Route path={`/${country.ccn3}`} element={<CountryDetails country={country} />}  />
              )
            })}
          </Routes>
        </Router>
      </CountryContext.Provider>
     
    </div>
  );
};

export default App;
