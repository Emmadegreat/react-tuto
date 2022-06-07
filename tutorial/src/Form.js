import 'bootstrap/dist/css/bootstrap.css';

import * as yup from "yup";

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    fullName: yup.string().fullname().required(),
    email: yup.string().email().required(),
    password: yup.string().password().min(8).max(16).required(),
    confirm__password: yup.string().password().oneOf([yup.ref("password"), null]).required(),
    number: yup.number().min(11).max(11).required(),
})



const Form = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ resolver: yupResolver(schema), });
    
    const submitForm = (data) => {
        console.log(data);
    };

  return (
      <div className="formApp">
          <p>hellllllllllllllllllow</p>
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


