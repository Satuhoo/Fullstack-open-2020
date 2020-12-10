import React from 'react'

const Person = ({person}) => {
    return (
      <div>
        <p>{person.name} {person.number}</p>
      </div>
    )
  }
  
const PersonForm = (props) => {
    return (
      <div>
        <form onSubmit={props.addPerson}>
          <div>
            Name: <input value={props.newName} onChange={props.handleNameChange} />
          </div>
          <div>
            Number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    )
}
  
const Filter = (props) => {
    return(
      <div>
        Filter shown with <input value={props.filter} onChange={props.handleFilterChange}/>
      </div>
    )
}

export { Person, PersonForm, Filter }