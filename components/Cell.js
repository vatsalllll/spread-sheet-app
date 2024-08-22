import { useState } from 'react'

const Cell = ({ cell, onChange }) => {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(cell)

  const handleBlur = () => {
    setEditing(false)
    onChange(value)
  }

  return (
    <div
      className="p-2 border border-gray-300"
      onClick={() => setEditing(true)}
    >
      {editing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="w-full"
        />
      ) : (
        value
      )}
    </div>
  )
}

export default Cell
