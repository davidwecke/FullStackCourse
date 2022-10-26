import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const StatisticsLine = ({text, value, isPercent}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}{isPercent?'%':''}</td>
    </tr>
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
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={(good+neutral+bad)} />
        <StatisticsLine text="average" value={(good-bad)/(good+neutral+bad)} />
        <StatisticsLine text="positive" value={(good)/(good+neutral+bad)*100} isPercent={true} />
      </tbody>
    </table>
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