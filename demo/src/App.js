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

const App = () => {
  const [counter, setCounter] = useState(0)

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [clicks, setClicks] = useState({left:0,right:0})

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text="left"/>
      <Button onClick={handleRightClick} text="right"/>
      {clicks.right}
    </div>
  )
}

export default App;
