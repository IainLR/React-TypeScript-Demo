import { useState } from 'react'

const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  //type inference will not work, must use <> to
  //explicitly type our guest array
  const [guests, setGuests] = useState<string[]>([])

  const handleClick = () => {
    setName('')
    setGuests([...guests, name])
  }

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default GuestList
