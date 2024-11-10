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
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product._id }), // Ensure you're sending the correct productId
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const data = await response.json();
      setCart(data); // Update the cart state with the response from the backend

    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

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
            <Route path ='/menu' element = {<Menu addToCart={addToCart} />} >Menu</Route>
            {/* <Route path ='*' element = {<Home />} ></Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;