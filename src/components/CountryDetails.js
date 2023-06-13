import React, { useContext } from 'react'
import { CountryContext } from './CountryContext'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CountryDetails = ({country}) => {
    const {allCountries} = useContext(CountryContext);
  return (
    <div className='text-black h-[100%] md:h-screen dark:text-white dark:bg-slate-800'>
        <div className=' px-4 md:px-12 pb-8 xl:px-36 pt-6'>
            <Link to="/">
                <button className='border dark:border-slate-700 px-6 py-1 text-[15px] drop-shadow-sm'> <FaArrowLeft className='inline mr-2' /> Back</button>
            </Link>

            <div className='flex flex-col lg:flex-row items-center gap-24 mt-8'>
                <div className='border dark:border-slate-800 h-56 max-w-[370px] md:h-[320px] flex-shrink md:flex-shrink-0'>
                    <img className='w-full h-full' src={country.flags.png} alt="" />
                </div>
                <div className=''>
                    <h3 className='font-bold text-xl'>{country.name.common}</h3>
                    <ul className='grid  md:grid-cols-2 my-8 text-[16px]'>
                        <li><span className='font-semibold'>Native Name:</span> {country.name.nativeName && Object.values(country.name.nativeName)[0].common}</li>
                        <li><span className='font-semibold'>Population:</span> {country.population} </li>
                        <li><span className='font-semibold'>Region:</span> {country.region} </li>
                        <li><span className='font-semibold'>Sub-Region:</span> {country.subregion} </li>
                        <li><span className='font-semibold'>Capital:</span> {country.capital} </li>
                        <li><span className='font-semibold'>Top Level Domain:</span> {country.tld}</li>
                        <li><span className='font-semibold'>Currencies: </span>{country.currencies && Object.entries(Object.entries(country.currencies)[0])[0].slice(1)} </li>
                        <li><span className='font-semibold'>Languages: </span>
                            {country.languages && Object.values(country.languages).map((lang) => {
                                return <span> {lang} </span>
                            })}
                        </li>
                    </ul>
                    <div className='mt-2'>
                        <span>Border: </span> 
                        {country.borders && country.borders.map((border) => {
                            return <span className='bg-slate-200 dark:bg-slate-700 py-1 px-4 mx-2 text-[15px]'>{border} </span>
                        })}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CountryDetails