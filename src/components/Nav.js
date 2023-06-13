import React, { useContext } from 'react';
import { BsMoon } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';
import { CountryContext } from './CountryContext';
import { Link } from 'react-router-dom';

const Nav = () => {
  const {theme, handleThemeSwitch} = useContext(CountryContext);
  return (
    <div className='flex px-4 text-black dark:bg-slate-700 dark:border-slate-700 dark:text-white border justify-between md:px-12 xl:px-24 py-6'>
      <Link to='/'>
        <div>
          <span className='font-bold'>Where in the world?</span>
        </div>
      </Link>
      <div className='cursor-pointer' onClick={handleThemeSwitch}>
        <BsMoon className='inline mr-2'  />
        <span>Dark mode</span>
      </div>
    </div>
  );
};

export default Nav;
