import React from 'react'

export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!')
    }}>
      <input type="text" />
      <button>Send</button>
    </form>
  )
}
