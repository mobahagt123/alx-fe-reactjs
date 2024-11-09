import React from 'react'
import { useState } from 'react'


function Counter() {

    const [count, setCount] = useState(0)

  return (
    <div style={{border:'1px solid black',padding:'10px',margin:'10px',textAlign:'center'}}>
         <p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter