import React, { useState } from 'react'

export default function Welcome() {
  const [firstName, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')

  function handleFirstNameChange(e){
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e){
    setLastName(e.target.value)
  }

  function handlereset(){
    setFirstName('')
    setLastName('')
  }


  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type='text' value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastname} onChange={handleLastNameChange} />
      <h1>Hi, {firstName} {lastname}</h1>
      <button onClick={handlereset}>Sumbit and Reset</button>
    </form>
  )
}
