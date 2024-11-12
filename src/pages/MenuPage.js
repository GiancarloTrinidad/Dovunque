import React, { useEffect, useState } from 'react';
import MenuCard from '../components/MenuCard.js';
import '../styles/Menu.css';

const MenuPage = ({ addToCart, removeFromCart }) => {
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

  // Check if cart is an array
  if (!Array.isArray(cart)) {
    return <div>Error: Cart data is not valid.</div>;
  }

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

  return (
    <>
      {/* <div className="menu-page container"> */}
        <h1>Dovunque Menu</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {products.map(product => (
              <MenuCard key={product._id} product={product} addToCart={addToCart} />
            ))}
        </div>
      
    
      {/* <div className="menu-page container">
        <h1>Dovunque Menu</h1>
        <div className="menu-list">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="price">Php {item.price.toFixed(2)}</p>
              <button onClick={() => addToOrder(item)} className="btn btn-primary">Add to Order</button>
            </div>
          ))}
        </div> */}

        <div className="order-summary">
          <h2>Your Order</h2>
          {error && <p>Error: {error}</p>} {/* Display error message if any */}
          
          {cart.length === 0 ? (
          <p>Cart is empty.</p>
          ) : (
          <ul>
            {cart.map(item => (
              <li key={item.productId._id}>
                {item.productId.name} - ${item.productId.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.productId._id)}>Remove</button>
              </li>
            ))}
          </ul>
          )}
          <p>Total: ${totalPrice.toFixed(2)}</p> {/* Format total price to 2 decimal places */}

          {/* {order.length === 0 ? (
            <p>No items in your order yet.</p>
          ) : (
            <ul>
              {order.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
          <h3>Total: ${getTotalPrice()}</h3>
          {order.length > 0 && (
            <button onClick={placeOrder} className="btn btn-success">Place Order</button>
          )} */}
        </div>
      {/* </div> */}
    </>
  );
};

export default MenuPage;
