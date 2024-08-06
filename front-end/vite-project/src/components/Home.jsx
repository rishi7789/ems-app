// src/components/Register.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
    <>
    <Header/>
     <div className="form-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p className="form-footer">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </>
   
  );
};

export default Home;
