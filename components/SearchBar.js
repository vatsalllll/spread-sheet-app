import { useState } from 'react'
import { useStore } from '../hooks/useStore'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const { setSearchQuery } = useStore()

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setSearchQuery(e.target.value)
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search..."
      className="mb-4 p-2 border rounded"
    />
  )
}

export default SearchBar
