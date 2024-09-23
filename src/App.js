import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Reservation from './components/Reservation';
import MainNavbar from './components/MainNavbar';
import Payment from './components/Payment'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <MainNavbar />
    <div>
      <Routes>
          <Route path ='/' element = {<Home />} >Home</Route>
          <Route path ='/login' element = {<Login />} >Login</Route>
          <Route path ='/payment' element = {<Payment />} >Payment</Route>
          <Route path ='/register' element = {<Register />} >Register</Route>
          <Route path ='/reservation' element = {<Reservation />} >Reservation</Route>
          {/* <Route path ='*' element = {<Home />} ></Route> */}
      </Routes>
    </div>
    </>
  );
}

export default App;