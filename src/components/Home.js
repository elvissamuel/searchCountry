import React, { useContext, useEffect, useState} from 'react';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { CountryContext } from './CountryContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ({myData}) => {
  const {isOpen, allCountries, setIsOpen, toggleDropdown, displayedData, displayedItem, addDisplay, displayTen, regionData, region, setRegion, searchQuery, handleSearchInput, theme, handleThemeSwitch} = useContext(CountryContext);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  
  const filteredSearch = myData.filter((item) =>
    item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayArray = allCountries.filter((value)=>{
    if (value.region === 'Europe'){
      return value;
    } else if (value.region === 'Africa'){
      return value;
    } else if(value === 'Asia'){
      return value;
    } else if(value === 'Oceania'){
      return value;
    } else if(value === 'Antarctic'){
      return value;
    } else if(value === 'Americas'){
      return value;
    }
  })
  
  return (
    <div className="text-black bg-slate-100 dark:bg-slate-800 dark:text-white">
     <div className='flex flex-col gap-y-2 md:flex-row justify-between px-4 md:px-20 py-8  '>
      <div className='relative'>
        <input type="text" value={searchQuery} onChange={handleSearchInput} className='border py-2 px-4 w-80 pl-12 dark:bg-slate-700 dark:border-slate-700 '  placeholder='Search for a country' />
        <FaSearch className='absolute top-4 left-4 text-slate-400'/>
      </div>

      <div>
        <div className=' flex items-center gap-2 bg-white dark:bg-slate-700 px-6 py-2 relative w-48 cursor-pointer' onClick={toggleDropdown}>
          {region === null ? 'Filter by region' : region} 
        <FaAngleDown />

        </div>

       { isOpen &&
       <div className='list-none bg-white dark:bg-slate-700 mt-2 px-6 pr-[100px] py-2 absolute cursor-pointer'>
          <li onClick={() => {setRegion('Africa'); setIsOpen(false)} }>Africa</li>
          <li onClick={() => {setRegion('America'); setIsOpen(false)}}>America</li>
          <li onClick={() => {setRegion('Asia'); setIsOpen(false)} }>Asia</li>
          <li onClick={() => {setRegion('Europe'); setIsOpen(false) }}>Europe</li>
          <li onClick={() => {setRegion('Oceania'); setIsOpen(false)} }>Oceania</li>
          <li onClick={() => {setRegion('Antarctic'); setIsOpen(false)} }>Antarctic</li>
          <li onClick={() => {setRegion(null); setIsOpen(false)} }>All</li>
        </div>
        }
      </div>
     </div>

    <div className='grid grid-cols-1 px-4 gap-4 md:grid md:grid-cols-2 md:px-10 lg:grid lg:grid-cols-3 lg:px-20 xl:grid xl:grid-cols-4 xl:px-20'>
      {filteredSearch.map((country, index) => {
        return(
          <Link to={`/${country.ccn3}`}>
            <div id={index} className='border m-4 mx-auto md:max-w-[300px] bg-slate-50 dark:bg-slate-700 dark:border-slate-700 pb-6'>
              <div className='w-full h-56 md:h-40'>
                <img src={country.flags.png} className='w-full h-full' alt="" />
              </div>
              <div className='pl-6 pt-4'>
                <h3 className='font-bold'>{country.name.common}</h3>

                <h5>Population: {country.population}</h5>
                <h5>Region: {country.region}</h5>
                <h5>Capital: {country.capital}</h5>

              </div>
            </div>
          </Link>
        )
      })}
    </div>
    {/* <button onClick={addDisplay}>Load more</button> */}
    </div>
  );
};

export default Home
