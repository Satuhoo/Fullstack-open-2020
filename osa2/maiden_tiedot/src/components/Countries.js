import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

const Filter = (props) => {
  return(
    <div>
      Find countries <input value={props.filter} onChange={props.handleFilterChange}/>
    </div>
  )
}


const Country = (props) => {
  return (
    <div>
      <p>{props.country.name} <button onClick={() => props.showCountry(props.country)}>
          show
        </button></p> 
    </div>
  )
}

const CountryData = ({country}) => {
  console.log(country)
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital {country.capital}</p>
      <p>Population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(value => <li key={value.name}> {value.name} </li>)}
      </ul>
      <img className='flag' src={country.flag} alt='Flag'/>
      <Weather country={country}/>
    </div>
  )
}

const Countries = ({countriesToShow, showCountry}) => {
  if (countriesToShow.length === 1) {
    return (
      <div>
        <CountryData country={countriesToShow[0]}/>
      </div>
    )
  } else if (countriesToShow.length <= 10) {
    return (
      <div>
        {countriesToShow.map(country => <Country key={country.name} country={country} showCountry={showCountry}/>)}
      </div>
    )
  } else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } 
}

const Weather = ({country}) => {
    const [weather, setWeather] = useState({})
    const api_key = process.env.REACT_APP_NOT_SECRET_CODE
    const [loading, setLoading] = useState(true)

    console.log(api_key)

    useEffect(() => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
          .then(response => {
            setWeather(response.data)
            setLoading(false)
          })
      }, [country.capital, api_key])

    if (loading) return null

    let temperature = Math.round(weather.main.temp - 273.15)
    
    return(
        <div>
            <h4>Weather in {country.capital}</h4>
            <p>temperature: {temperature} Celsius</p>
            <p>wind: {weather.wind.speed} m/s</p>
        </div>
    )
}

export {Countries, Filter}