import React from 'react'

const Person = ({contactFilter,contacts}) => {
  return (
    <ul>
        {!contactFilter
          ? contacts.map((contact) => (
              <li key={contact.id}>
                {contact.name} and number:{contact.number}{' '}
              </li>
            ))
          : contactFilter.map((contact) => (
              <li key={contact.id}>
                {contact.name} and number:{contact.number}{' '}
              </li>
            ))}
      </ul>
  )
}

export default Person