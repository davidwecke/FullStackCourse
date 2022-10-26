import {useState} from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const MostVotes = ({anecdotes, points}) => {
  let max = 0
  let maxIndex = 0
  for(let i = 0; i < points.length; i++) {
    if(points[i] > max) {
      max = points[i]
      maxIndex = i
    }
  }
  return (
    <div>{anecdotes[maxIndex]} It has {max} votes.</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const handlePoints = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
  }

  return(
    <div>
      <Header text='Anecdote of the day' />
      <Button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text='Random Anecdote!' />
      {anecdotes[selected]} <br/>
      Has {points[selected]} votes.
      <Button onClick={handlePoints} text='Vote' />

      <Header text='Anecdote with the most votes' />
      <MostVotes anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App;