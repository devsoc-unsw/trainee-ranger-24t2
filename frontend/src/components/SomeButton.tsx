import React, { useState } from 'react'

// This component is a test component, don't worry about this
const SomeButton = () => {
  const [count, setCount] = useState(0);

//   let c = 0;
  const increase = (c: number) => {
    // console.log(c + 1);
    // c++;
    setCount(c + 1);
  }

  return (
    <button onClick={() => increase(count)}>SomeButton {count}</button>
  )
}

export default SomeButton