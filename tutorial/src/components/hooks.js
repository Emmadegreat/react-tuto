import React, { useState} from 'react'

function Hooks() {
    /*const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1)
    };

    const increment = () => {
        setCount(count + 1)
    };*/

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div><span>  {count}</span> <br />
          <button onClick={increment}>+</button> 
          <button onClick={decrement}>-</button>
          <input
              type="email"
              name=""
              value={email}
              onChange={e => setEmail(e.target.value)}
          />
          
          <input
              type="password"
              name=""
              id=""
              value={password}
              onChange={e=>setPassword(e.target.value)}
          />
    </div>
  )
}

export default Hooks
