import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Login = () => {

  const[email,setEmail] = useState()
  const[password,setPassword] = useState()

  let navigate = useNavigate();


const handleSubmit= (e)=>{
       e.preventDefault();
       axios.post('http://localhost:3000/login',{email,password})
       .then(result =>{ console.log(result)
       localStorage.setItem("authtoken",result.data.authtoken)})
      .then(result => console.log(localStorage.getItem("authtoken")))
       .then(result => navigate('/home'))
       .catch(err => console.log(err))
}

  return (
    <>
    <Header/>
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email"  onChange={(e)=> setEmail(e.target.value)}  />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password"  onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="form-footer">
        Don't have an account? <Link to="/">Register</Link>
      </p>
    </div>
    </>
  );
};

export default Login;
