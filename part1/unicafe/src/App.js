import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Display = ({text, value}) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const Heading = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {good+neutral+bad} <br/>
      average {(good-bad)/(good+neutral+bad)} <br/>
      positive {(good)/(good+neutral+bad)*100}% <br/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)

  return (
    <div>
      <Heading text='give feedback'/>

      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <Heading text='statistics'/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App