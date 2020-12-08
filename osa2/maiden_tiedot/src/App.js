import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Countries, Filter} from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showCountries, setShowCountries] = useState(false)

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = !showCountries
  ? countries
  : countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  
  const showCountry = (country) => {
    setFilter(country.name)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setShowCountries(true)
  }

  return (
    <div>
      <Filter value={filter} handleFilterChange={handleFilterChange}/>
      <Countries countriesToShow={countriesToShow} showCountry={showCountry}/>
    </div>
  );
}

export default App;
