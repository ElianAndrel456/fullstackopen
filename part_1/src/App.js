import { useState } from 'react'
import { CourseInfo } from './Courseinfo/CourseInfo'
import Unicafe from './Unicafe/Unicafe'

const Hello = ({ age, name }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <p>Soy un footer</p>
    </div>
  )
}

function Display({ counter }) {
  return <div>Contador : {counter}</div>
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>
  }

  return <div>button press history: {props.allClicks.join(' ')}</div>
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [clicks, setClicks] = useState({ left: 0, right: 0, allClicks: [] })
  const { left, right, allClicks } = clicks

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const handleLeftClick = () =>
    setClicks({ ...clicks, left: left + 1, allClicks: allClicks.concat('L') })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: right + 1, allClicks: allClicks.concat('R') })

  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
      <Footer />
      <hr />
      <CourseInfo />
      <hr />
      <Unicafe />
    </>
  )
}

export default App
