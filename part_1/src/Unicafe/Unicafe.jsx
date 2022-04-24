import React, { useState } from 'react'
import Statistics from './Statistics'

const Unicafe = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (event) => {

    if (event.target.textContent === 'good') {
      setGood(good + 1)
    }
    if (event.target.textContent === 'neutral') {
      setNeutral(neutral + 1)
    }
    if (event.target.textContent === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={handleClick}>good</button>
      <button onClick={handleClick}>neutral</button>
      <button onClick={handleClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default Unicafe
