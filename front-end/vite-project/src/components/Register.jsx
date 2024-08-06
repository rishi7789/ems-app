import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Register = () => {
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
 
  const handleSubmit= async (e)=>{
    e.preventDefault();
     try{
      const adduser= await axios.post('http://localhost:3000/register', {name, email, password});
      const response= adduser.data;
      console.log(response);
      alert("Registered successfully");
     } catch(error){
      console.log(error);
      }
    }

  return (
    <>
    <Header/>
 
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type="submit" className='form-btn'>Register</button>
      </form>
      <p className="form-footer">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </>
  );
};

export default Register;
