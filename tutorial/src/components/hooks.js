import React, { useEffect, useState } from 'react'

import { useForm } from './useform';

const Hooks = () => {
  
    /*const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1)
    };

    const increment = () => {
        setCount(count + 1)<button onClick={increment}>+</button> 
          <button onClick={decrement}>-</button>
    };

  //const [values, handleChange] = useForm({ email:"", password:"", name:"" });
  
  useEffect(() => {
    console.log("render");
  }, [values.password, values.email,values.name]);*/

  const [values, handleChange] = useForm({ email: "", password: "", name: "" });
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit=(e) => {
    e.preventDefault();
    if (values.email && values.password && values.name) {
      setValid(true)
    }
    setSubmit(true);
  }

  return (
    <div classname="form-container">
      <>
        {submit && valid? <div className="success-message">success, you have been registered</div>:null}
        
      <form className="register-form" onSubmit={handleSubmit}>         
      <span>  </span> <br />
          <input
              type="email"
            name="email"
            disabled={submit}
            placeholder="Email"
              value={values.email}
              onChange={handleChange}
          /> {submit && !values.email? <span>please enter valid email</span> : null}
          <br /><br />
          
          
          <input
              type="password"
              name=""
            id=""
            disabled={submit}
            placeholder="password"
              value={values.password}
              onChange={handleChange}
          /> {submit && !values.password? <span>please enter valid password</span> : null}
          <br /><br />

          
          <input 
            type="text" 
            className="form-field"
            name="fullname" 
            id="name"
            disabled={submit}
            placeholder="name"
            value={values.name}
            OnChange={handleChange} 
              
          />{submit && !values.name? <span>please enter valid name</span> : null}
          <br /><br />
          
          <button
            type="submit"
            id="submit">register
          </button>
          </form>
          </>
          
    </div>
  )
}

export default Hooks
