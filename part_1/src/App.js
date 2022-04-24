import { useState } from 'react'
import { CourseInfo } from './Courseinfo/CourseInfo'

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

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

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
      <Footer />
      <hr />
      <CourseInfo />
    </>
  )
}

export default App
