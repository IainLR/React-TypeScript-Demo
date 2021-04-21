const EventComponent: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
    <div>
      <input type='text' onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default EventComponent
