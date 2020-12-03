import React from 'react'
import ReactDOM from 'react-dom'

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

const Course = ({courses}) => {
  return (
    <div>
      <Header course={courses.name} />
      <Content parts={courses.parts} />
      <Total parts={courses.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
          <Course key={course.id} courses={course} />
        )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
