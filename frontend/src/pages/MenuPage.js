import React, { useEffect, useState } from 'react';
import MenuCard from '../components/MenuCard.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import '../styles/Menu.css';

const MenuPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Fetch cart data from the backend when the component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart');

        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }
        const data = await response.json();
        setCart(data); // Set the fetched cart data into state

      } catch (error) {
        console.error('Error fetching cart data:', error);
        setError(error.message); // Set the error message
      }
    };
    fetchCart();
  }, []);

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
      
      // window.location.reload();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    const response = await fetch('http://localhost:5000/api/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    const data = await response.json();
    setCart(data);
  };

  const increaseQuantity = async (productId) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/increase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      if (!response.ok) throw new Error("Failed to increase quantity");
  
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };
  
  const decreaseQuantity = async (productId) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/decrease", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      if (!response.ok) throw new Error("Failed to decrease quantity");
  
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

  return (
    <>
      <div className="menu-page">
        <h1>Dovunque Menu</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {products.map(product => (
              <MenuCard key={product._id} product={product} addToCart={addToCart} />
            ))}
        </div>

        <div className="order-summary">
          <h2>Your Order</h2>
          {error && <p>Error: {error}</p>} {/* Display error message if any */}
          
          {cart.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div className="order-item" key={item.productId._id}>
                  
                  {/* Product Details */}
                  <div className='product-info'>
                    <h4><strong>{item.productId.name}</strong></h4>
                    <p>₱{item.productId.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity buttons */}
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.productId._id)}
                       // Disable if quantity is 1
                      disabled={item.quantity === 1}> -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.productId._id)}> + </button>
                  </div>

                  {/* Total Price for Product */}
                  <p className="total-price">₱{(item.productId.price * item.quantity).toFixed(2)}</p>

                  {/* Remove Button */}
                  <button className="remove-button"onClick={() => removeFromCart(item.productId._id)}>&times;</button>
                </div>
              ))}
              </div>
          )}
          <h5 className="mt-4"><strong>Total: ₱{totalPrice.toFixed(2)}</strong></h5>

          <Button 
            className="btn btn-primary"
            as = {Link} to="/payment">Pay Now 
          </Button> 
        </div>
      </div>
    </>
  );
};

export default MenuPage;