const EventComponent: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e)
  }

  return (
    <div>
      <input type='text' onChange={(e) => handleChange(e)} />
      <div draggable onDragStart={(e) => handleDrag(e)}>
        Drag!
      </div>
    </div>
  )
}

export default EventComponent
