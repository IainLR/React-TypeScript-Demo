interface ChildProps {
  color: string
}

// export const Child = (props: ChildProps) => {
//     return <div>Hello</div>
//   }

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>
}
