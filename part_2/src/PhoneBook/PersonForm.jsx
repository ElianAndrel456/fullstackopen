import React from 'react'

const PersonForm = ({ handleSubmitAdd, handleChangeText, newContat ,handleChangeNumber}) => {
  return (
    <form onSubmit={handleSubmitAdd}>
      <input type="text" onChange={handleChangeText} value={newContat.name} />
      <input
        type="text"
        onChange={handleChangeNumber}
        value={newContat.number}
      />
      <button type="submit">add</button>
    </form>
  )
}

export default PersonForm
