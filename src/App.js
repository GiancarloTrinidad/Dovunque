import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/HomePage';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Menu from './pages/MenuPage';
import Reservation from './pages/ReservationPage';
import Payment from './pages/PaymentPage'
import MainNavbar from './components/MainNavbar';
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
            <Route path ='/menu' element = {<Menu />} >Menu</Route>
            {/* <Route path ='*' element = {<Home />} ></Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;