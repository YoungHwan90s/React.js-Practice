import React from 'react'

function Child({age = 1, name, children}) {
    console.log(age)
    console.log(name)
    console.log(children)
  return (
    <div>Child</div>
  )
}
// Child.defaultProps={
//     age: "default age"
// }
export default Child