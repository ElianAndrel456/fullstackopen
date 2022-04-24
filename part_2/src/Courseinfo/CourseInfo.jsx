import React from 'react'
import { Content } from './Content'
import { Header } from './Header'
import Total from './Total'

export const CourseInfo = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <div>
        <Header course={courses[0].name} />
        <Content parts={courses[0].parts} />
        <Total parts={courses[0].parts} />
        <Header course={courses[1].name} />
        <Content parts={courses[1].parts} />
        <Total parts={courses[1].parts} />
      </div>
    </div>
  )
}
