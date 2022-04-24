import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ good, bad, neutral }) => {
  return (
    <>
      <h2>Statistics</h2>
      {good || bad || neutral ? (
        <>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={good + neutral + bad} />
          <Statistic
            text="Avarage"
            value={Number.parseFloat(
              ((good - bad) / (good + neutral + bad)).toFixed(2)
            )}
          />
          <Statistic
            text="Positive"
            value={(good / (good + neutral + bad)).toFixed(2) + '%'}
          />
        </>
      ) : (
        'No feedback  given'
      )}
    </>
  )
}

export default Statistics
