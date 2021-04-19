interface ChildProps {
  color: string
  onClick: () => void
}
// simplest implementation of interface
// export const Child = (props: ChildProps) => {
//     return <div>Hello</div>
//   }

// implementation with destructuring
// however TS doesn't understand this is REACT component
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click</button>
    </div>
  )
}

// defines function component with TS
// TS is now aware this is React function component
// aware of properties such as 'propTypes', 'contextTypes',
// 'displayName', etc.
// <ChildProps> tells TS the Child will recieve a type of
// 'ChildProps'
// .FC is short for .FunctionComponent. Interchangable
// Also allows us to use children prop
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click</button>
    </div>
  )
}
