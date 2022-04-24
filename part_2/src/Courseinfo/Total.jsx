import React, { useState,useEffect } from 'react'

const Total = ({ parts }) => {
  const [additionParts, setAdditionParts] = useState(0)
  useEffect(() => {
    let sumaDePartes = 0
    parts.forEach((element) => {
      sumaDePartes += element.exercises
    })
    setAdditionParts(sumaDePartes)
  }, [parts]);
  return <p>Number of exercises {additionParts}</p>
}

export default Total
