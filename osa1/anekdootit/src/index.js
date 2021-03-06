import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      <p>{props.anecdotes[props.index]}</p>
    </div>
  )
}

const Points = (props) => {
  return (
    <div>
      <p>has {props.points[props.index]} points</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  let arr = []
  arr.length = props.anecdotes.length
  arr.fill(0)
  const [points, setPoints] = useState(arr)

  let mostVoted = points.indexOf(Math.max(...points))

  const selectIndex = () => {
    let max = props.anecdotes.length
    let index = Math.floor(Math.random() * max);
    setSelected(index)
  }

  const addPoint = () => {
    const copy = [...points]
    copy[selected] += 1 
    setPoints(copy)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={props.anecdotes} index={selected}/>
      <Points points={points} index={selected}/>
      <Button onClick={addPoint} text='vote'/>
      <Button onClick={selectIndex} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={props.anecdotes} index={mostVoted}/>
      <Points points={points} index={mostVoted}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)