import React, { useState } from 'react';
import Header from './Header';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateData = () => {
  const { id } = useParams();
 const [empid, setEmpid]= useState();
 const [empname, setEmpname]= useState();
 const [salary, setSalary]= useState();
 const [department, setDepartment]= useState();
 const navigate = useNavigate();

 const handleSubmit= async (e)=>{
  e.preventDefault();
   try{
    const updateEmp= await axios.put(`http://localhost:3000/update/${id}`, {empid, empname, salary, department});
    navigate('/home');
   } catch(error){
    console.log(error);
    }
  }


  return (
<>
<Header/>
<div className="form-container">
      <h2>Update employee data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee id:</label>
          <input type="number" placeholder="Enter your username" onChange={(e)=> setEmpid(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Employee name:</label>
          <input type="text" placeholder="Enter your email" onChange={(e)=> setEmpname(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="number" placeholder="Enter your password" onChange={(e)=> setSalary(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" placeholder="Enter your password" onChange={(e)=> setDepartment(e.target.value)}/>
        </div>
        <button type="submit" onClick={handleSubmit}>Update</button>
      </form>
    </div>
</>
    
  );
};

export default UpdateData;
