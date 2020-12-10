import React, { useState, useEffect } from 'react'
import { Person, PersonForm, Filter } from './components/Person'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  useEffect(() => {
    personService
      .getPersons()
      .then(data => {
        setPersons(data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setShowAll(false)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.some(obj => obj.name === newPerson.name)){
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      personService
        .createPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      {personsToShow.map(person =>
        <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default App
