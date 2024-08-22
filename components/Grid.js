import Cell from './Cell'
import { useStore } from '../hooks/useStore'

const Grid = () => {
  const { cells, updateCell } = useStore()

  return (
    <div className="grid grid-cols-10 gap-1">
      {cells.map((cell, index) => (
        <Cell key={index} cell={cell} onChange={(value) => updateCell(index, value)} />
      ))}
    </div>
  )
}

export default Grid
