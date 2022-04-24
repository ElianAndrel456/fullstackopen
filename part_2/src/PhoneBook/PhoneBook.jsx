import React, { useState } from 'react'
import Filter from './Filter'
import Person from './Person'
import PersonForm from './PersonForm'
const initialContacts = [
  { name: 'Arto Hellas', id: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', id: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', id: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', id: 'Mary Poppendieck', number: '39-23-6423122' }
]

const PhoneBook = () => {
  const [contacts, setContacts] = useState(initialContacts)
  const [newContat, setNewContat] = useState({
    name: 'Name of contact',
    number: 'His Number'
  })
  const [filter, setFilter] = useState('')
  const [contactFilter, setContactFilter] = useState(null)
  const handleSubmitAdd = (event) => {
    event.preventDefault()
    const objContact = {
      name: newContat.name,
      id: newContat,
      number: newContat.number
    }
    const name = contacts.find((contact) => contact.name === objContact.name)
    if (isNaN(objContact.number)) alert('No es un numero')
    if (!name) setContacts(contacts.concat(objContact))
    else alert(`${newContat.name} is already added to phonebook`)
    setNewContat(initialContacts)
  }
  const handleChangeText = (event) => {
    setNewContat({ ...newContat, name: event.target.value })
  }
  const handleChangeNumber = (event) => {
    setNewContat({ ...newContat, number: event.target.value })
  }
  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
    console.log(event)
    const filtrado = [...contacts]
    const extraido = filtrado.filter((fill) =>
      fill.name.toLowerCase().match(filter)
    )
    setContactFilter(extraido)
    if (filter === '') setFilter({ ...contacts })
  }

  return (
    <>
      <h2>Phonebook</h2>
      <p>filter show with</p>
      <Filter handleChangeFilter={handleChangeFilter} />
      <h2>Add a New</h2>
      <PersonForm
        handleSubmitAdd={handleSubmitAdd}
        handleChangeText={handleChangeText}
        handleChangeNumber={handleChangeNumber}
        newContat={newContat}
      />

      <h2>Numbers</h2>
      <Person contacts={contacts} contactFilter={contactFilter} />
    </>
  )
}

export default PhoneBook
