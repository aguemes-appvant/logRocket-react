import React from 'react'
import '../../Styles/search.css'
import { setFilterDeviceHnd } from '../../Tools/Devices/devicesHandler'

const Search = () => {
  
  const handleFilterChange = (e) => {
    console.log(e.target.value)
    setFilterDeviceHnd(e.target.value)
  }

  return (
    <div className='Search'>
        <input 
          id="searchbar" 
          className='form-control'
          onChange={(e) => handleFilterChange(e)}
        ></input>
    </div>
  )
}

export default Search