const ToolBar = () => {
    return (
      <div className="mb-4 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Undo</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Redo</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Format</button>
      </div>
    )
  }
  
  export default ToolBar