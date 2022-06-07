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
        
      <form className="ui-form" onSubmit={handleSubmit}>         
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

/*


<div className="formApp">
          <form autoComplete="off" action="#" method="post" className="form" onSubmit={handleSubmit((data)=>console.log(data))} >
              <h1>Sign Up</h1>
              <label htmlFor="fullname">Fullname</label><br />
              <input
                  type="text"
                  {...register("fullname", {
                      required: "fullname is required",
                      minLength: {
                          value: 3,
                          message: "3 minimum characters",
                      },
                      maxLength: {
                          value: 10,
                          message: "not more than 10 characters",
                      },
                  })}
                  name="full__name"
                  id="full__name"
                  placeholder="fullname"
              /> <p>{ errors.fullname?.message}</p> 

                <label htmlFor="email">Email</label><br />
              <input
                  type="email"
                  {...register("email", {
                      required: "email required",
                      minLength: 50, maxLength: 20,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message:"Email must be valid"
                  })}
                  
                  name="email"
                  id="email"
                  placeholder="Email"
              /> <p>{ errors.email?.message}</p>
              
              <label htmlFor="password">Password</label><br />
              <input
                  type="password"
                  {...register("password", {
                      required: "password required",
                      maxLength: 16,
                      minLength: 8,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})$/,
                      message:"Email must conatin atleast 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"
                  })}
                  name="password"
                  id="user__password"
                  placeholder="Password"
              /> <p>{ errors.password?.message}</p>

              <label htmlFor="confirm__password">Confirm__password</label><br />
              <input
                  type="password"
                  {...register("confirm__password", {
                      required: "password required",
                      message:"password must match"
                  })}
                  name="password"
                  id="confirm__password"
                  placeholder="Confirm__password"
              />
              <p>{ errors.confirm__password?.message}</p>

              <select name="" id="" {...register("gender", {required:"gender is required"})}>
                  <option value="">Male</option>
                  <option value="">Female</option>
              </select>
              <p>{ errors.gnder?.message}</p><br />

                <input type="submit" className="btn btn-primary" value="sign up" />
          </form>


*/