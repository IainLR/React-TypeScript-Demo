import { useState } from 'react'

const users = [
  { name: 'Sarah', age: 22 },
  { name: 'Alex', age: 23 },
  { name: 'Doug', age: 25 },
]
const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const handleClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name
    })
    setUser(foundUser)
  }

  return (
    <div>
      User Search
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
