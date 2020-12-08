import React from 'react'
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
      <p>{props.country.name}</p>
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
    </div>
  )
}

const Countries = ({countriesToShow}) => {
  if (countriesToShow.length === 1) {
    return (
      <div>
        <CountryData country={countriesToShow[0]}/>
      </div>
    )
  } else if (countriesToShow.length <= 10) {
    return (
      <div>
        {countriesToShow.map(country => <Country key={country.name} country={country}/>)}
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

export {Countries, Filter}