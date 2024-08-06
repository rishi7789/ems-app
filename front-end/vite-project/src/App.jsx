import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Empdata from './components/Empdata';
import AddData from './components/AddData';
import UpdateData from './components/UpdateData'
import './App.css';

function App() {

  return (
    <Router>
        <Routes>
        
          <Route path="/home" element={<Empdata/>} />
          <Route path="/add" element={<AddData/>} />
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/update/:id" element={<UpdateData />} />
        </Routes>
    
    </Router>
  );
}

export default App;
