import {useState} from 'react'

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing buttons
      </div>
    )
  }

  return (
    <div>
      btton press history: {allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const [clicks, setClicks] = useState({left:0,right:0})

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const handleLeftClick = () => {
    setLeft(left+1)
    setAllClicks(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    setRight(right+1)
    setAllClicks(allClicks.concat('R'))
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left"/>
      <Button onClick={handleRightClick} text="right"/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App;
