import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral} </p>
        <p>bad {props.bad} </p>
        <p>all {props.all}</p>
        <p>average {(props.good - props.bad) / props.all}</p>
        <p>positive {props.good * 100 / props.all}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)