import React, { useState, useEffect, useMemo, useCallback } from 'react'
import List from './List'

const initialUser = [
  { id: 1, name: 'Luis' },
  { id: 2, name: 'Maria' },
]

const App = () => {

  const [users, setUsers] = useState(initialUser)
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text }
    setUsers([...users, newUser])
  }
  const handleSearch = () => {
    setSearch(text)
  }

  const filteredUsers = useMemo(() =>
    users.filter(user => {
      console.log('filter process')
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
    , [search, users])

  const handleDelete = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }, [users])

  const printUsers = useCallback(() => {
    console.log('changed users', users)
  }, [users])

  useEffect(() => {
    console.log('app render');
  })

  useEffect(() => {
    printUsers()
  }, [users, printUsers])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
      <button onClick={handleAdd}>
        Add
      </button>
      <List
        users={filteredUsers}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
