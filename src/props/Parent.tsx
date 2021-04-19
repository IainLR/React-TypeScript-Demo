import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color='green' onClick={() => console.log('click')}>
      asdf
    </ChildAsFC>
  )
}

export default Parent
