import React, { useState } from 'react';
import Header from './Header';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddData = () => {
 const [empid, setEmpid]= useState();
 const [empname, setEmpname]= useState();
 const [salary, setSalary]= useState();
 const [department, setDepartment]= useState();

 let navigate= useNavigate();

 
 const handleSubmit= async (e)=>{
  e.preventDefault();
   try{
    const addemp= await axios.post('http://localhost:3000/add', {empid, empname, salary, department});
    const response= addemp.data;
    navigate("/home")
    console.log(response);
   } catch(error){
    console.log(error);
    }
  }


  return (
<>
<Header/>

<div className="form-container">
      <h2>Add employee data</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
</>
    
  );
};

export default AddData;
