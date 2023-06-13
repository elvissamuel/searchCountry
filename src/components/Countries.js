import React from 'react'

export const Countries = () => {
  return (
    <div className="text-black bg-slate-100">
     <div className='flex justify-between px-20 py-8'>
      <div className='relative'>
        <input type="text" className='border py-2 px-4 w-80 pl-12 '  placeholder='Search for a country' />
        <FaSearch className='absolute top-4 left-4 text-slate-400'/>
      </div>

      <div>
        <div className=' flex items-center gap-2 bg-white px-6 py-2 relative' onClick={toggleDropdown}>
          Filtermm by region 
        <FaAngleDown />

        </div>

       {/* { isOpen &&
       <div className='list-none bg-white mt-2 px-6 pr-[100px] py-2 absolute'>
          <select name="" id="">
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
        } */}
      </div>
      

     </div>

    <div className='grid grid-cols-1 px-20 md:grid md:grid-cols-2 md:px-10 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:px-16'>
      {/* <div className='text-black'>
        <h3>Select Country</h3>
        <select name="" id="">
          <option value="">Nig</option>
          <option value="">Gha</option>
          <option value="">Rsa</option>
        </select>
      </div> */}
      {displayedData.map((country, index) => {
        return(
          <div id={index} className='border m-4 max-w-[300px] bg-slate-50 '>
            <div className='w-full h-40'>
              <img src={country.flags.png} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='pl-6 pt-4'>
              <h3 className='font-bold'>{country.name.common}</h3>

              <h5>Population: {country.population}</h5>
              <h5>Region: {country.region}</h5>
              <h5>Capital: {country.capital}</h5>

            </div>
          </div>
        )
      })}
    </div>
    <button onClick={addDisplay}>Load more</button>
    </div>
  )
}
