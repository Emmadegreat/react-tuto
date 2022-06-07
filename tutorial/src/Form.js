import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.css'



const Form = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({mode:"all"});
    console.log("errors", errors);
  return (
    <div className="formApp">  
      
    </div>
  )
}

export default Form


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