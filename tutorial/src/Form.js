import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.css'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    fullName: yup.string().fullname().required(),
    email: yup.string().email().required(),
    password: yup.string().password().min(8).max(16).required(),
    confirm__password: yup.string().password().oneOf([yup.ref("password"), null]).required(),
    number: yup.number().phone__number().min(11).max(11).required(),
})



const Form = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ resolver: yupResolver(schema), });
    
    const submitForm = (data) => {
        console.log(data);
    };

  return (
      <div className="formApp">
        <form action="#" method="post" className="form" onSubmit={handleSubmit(submitForm)} >
              <h1>Sign Up</h1>
              <label htmlFor="fullname">Fullname</label><br />
              <input
                  type="text"
                  ref={register}
                  name="fullName"
                  id="full__Name"
                  placeholder="fullName"
              /> <p>{ errors.fullName?.message}</p> 

                <label htmlFor="email">Email</label><br />
              <input
                  type="email"
                  ref={register}                 
                  name="email"
                  id="email"
                  placeholder="Email"
              /> <p>{ errors.email?.message}</p>
              
              <label htmlFor="password">Password</label><br />
              <input
                  type="password"
                  ref={register}
                  name="password"
                  id="user__password"
                  placeholder="Password"
              /> <p>{ errors.password?.message}</p>

              <label htmlFor="confirm__password">Confirm__password</label><br />
              <input
                  type="password"
                  ref={register}
                  name="confirm__password"
                  id="confirm__password"
                  placeholder="Confirm__password"
              />
              <p>{ errors.confirm__password?.message}</p>  

              <label htmlFor="number">Phone__Number</label><br />
              <input
                  type="number"
                  ref={register}
                  name="number"
                  id="number"
                  placeholder="Phone__Number"
              />
              <p>{errors.number?.message}</p>
              
              <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
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