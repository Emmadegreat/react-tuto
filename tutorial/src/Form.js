import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './index.css'

import React from 'react';

const schema = yup.object().shape({
    fullName: yup.string().required("Enter your full name"),
    email: yup.string().email().required("Enter valid email"),
    password: yup.string().min(8).max(16).required("password must conatin atleast 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"),
    confirm__password: yup.string().oneOf([yup.ref("password"), null]).required("password must match"),
    number: yup.number().min(11).max(11).required("Enter your phone number"),
});

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    });
    
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
                  {...register("fullName")}
                  name="fullName"
                  id="full__Name"
                  placeholder="fullName"
              /> <p>{ errors.fullName?.message}</p> 

                <label htmlFor="email">Email</label><br />
              <input
                  type="email"
                  {...register("email", {pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}                 
                  name="email"
                  id="email"
                  placeholder="Email"
              /> <p>{ errors.email?.message}</p>
              
              <label htmlFor="password">Password</label><br />
              <input
                  type="password"
                  {...register("password", {pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})$/})}
                  name="password"
                  id="user__password"
                  placeholder="Password"
              /> <p>{ errors.password?.message}</p>

              <label htmlFor="confirm__password">Confirm__password</label><br />
              <input
                  type="password"
                  {...register("confirm__password")}
                  name="confirm__password"
                  id="confirm__password"
                  placeholder="Confirm password"
              />
              <p>{ errors.confirm__password?.message}</p>  

              <label htmlFor="number">Phone__Number</label><br />
              <input
                  type="number"
                  {...register("password")}
                  name="number"
                  id="number"
                  placeholder="Phon Number"
              />
              <p>{errors.number?.message}</p>
              
              <button type="submit" className="btn btn-success btn-block">Sign up</button>
            </form>
            <div className="form-group">
                <input type="text" className="form-control"  />
            </div>
        </div>
    
    )
}

export default Form
