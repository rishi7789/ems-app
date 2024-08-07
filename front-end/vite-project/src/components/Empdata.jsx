import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function Empdata() {
const[empdata,setEmpdata]= useState([]);

useEffect(()=>{
   async function Fetchdata(){
    try{
        const users = await axios.get('http://localhost:3000/display');
        const response = users.data;
        console.log(response);
        setEmpdata(response);
    }catch(err){
        console.log(err);
        
    }
    
   }  

   Fetchdata()
}, [])


async function DeleteUser(id){
     try{
         const deleteUser = await axios.delete(`http://localhost:3000/delete/${id}`);
         setEmpdata((prevData) => prevData.filter((emp) => emp.empid !== id));
        //  const response = deleteUser.data;
        //  console.log(response);
     }catch(err){
         console.log(err);
         
     }
 }  

  return (
    <div className="container">
    <Header />
    <div className="center-container">
      <Link to="/add">
        <button className="add-btn">Add new Employee</button>
      </Link>
  <div className="emp-data">
      <div className="table-container">
        <table>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
          {empdata.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.empid}</td>
                <td>{e.empname}</td>
                <td>{e.salary}</td>
                <td>{e.department}</td>
                <td>
                  <Link to={`/update/${e.empid}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button className="delete-btn" onClick={() => DeleteUser(e.empid)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default Empdata;
