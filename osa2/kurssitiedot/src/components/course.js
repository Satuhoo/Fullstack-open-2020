import React from 'react'

const Course = ({courses}) => {
    return (
      <div>
        <Header course={courses.name} />
        <Content parts={courses.parts} />
        <Total parts={courses.parts} />
      </div>
    )
}

const Header = ({course}) => {
    return (
      <div>
        <h2>{course}</h2>
      </div>
    )
}
  
const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => 
            <Part key={part.id} part={part.name} exercises={part.exercises}/>
          )}
      </div>
    )
}
  
const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
}
  
const Total = ({parts}) => {
    let exercises = [];
    parts.forEach(part => {
      exercises.push(part.exercises)
    });
      
    const total = exercises.reduce((acc, cur) => acc + cur);
  
    return (
      <div>
        <p>Total of exercises {total}</p>
      </div>
    )
}

export default Course
  