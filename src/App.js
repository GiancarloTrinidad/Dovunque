import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Reservation from './components/Reservation';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <Routes>
            <Route path ='/' element = {<Home />} >Home</Route>
           <Route path ='/login' element = {<Login />} >Login</Route>
           <Route path ='/payment' element = {<Payment />} >Payment</Route>
           <Route path ='/register' element = {<Register />} >Register</Route>
           <Route path ='/reservation' element = {<Reservation />} >Reservation</Route>
      </Routes>
    </div>
    </>
  );
}

export default App;