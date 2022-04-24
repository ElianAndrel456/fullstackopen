import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const Anecdotes = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const maxPoint = Math.max(...points)
  const puntos = [...points]
  const anecdote = anecdotes[puntos.findIndex((point) => point === maxPoint)]

  const handleNextAnecdote = () => setSelected(selected + 1)

  const handleVoteAnecdote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }
  return (
    <>
      <div>{anecdotes[selected]}</div>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVoteAnecdote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h2>Anecdotes with most votes</h2>
      <p>{anecdote}</p>
      <p>has {maxPoint}</p>
    </>
  )
}

export default Anecdotes
