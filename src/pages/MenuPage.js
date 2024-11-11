import React, { useState } from 'react';
import '../styles/Menu.css';

function Menu() {
  // Sample Menu Data
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with fresh basil, mozzarella, and tomato sauce', price: 12.99 },
    { id: 2, name: 'Spaghetti Carbonara', description: 'Spaghetti with pancetta, eggs, and Parmesan', price: 14.99 },
    { id: 3, name: 'Lasagna', description: 'Layered pasta with meat sauce, bechamel, and cheese', price: 16.99 },
    { id: 4, name: 'Tiramisu', description: 'Coffee-flavored Italian dessert', price: 6.99 },
    { id: 5, name: 'Fettuccine Alfredo', description: 'Fettuccine pasta in a creamy Alfredo sauce', price: 15.99 },
  ];

  const [order, setOrder] = useState([]);

  // Function to add an item to the order
  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  // Function to calculate the total price of the order
  const getTotalPrice = () => {
    return order.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Function to "place the order"
  const placeOrder = () => {
    alert(`Thank you! Your order has been placed. Total: $${getTotalPrice()}`);
    setOrder([]); // Reset the order after placing
  };

  return (
    <div className="menu-page container">
      <h1>Dovunque Menu</h1>
      <div className="menu-list">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">${item.price.toFixed(2)}</p>
            <button onClick={() => addToOrder(item)} className="btn btn-primary">Add to Order</button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h2>Your Order</h2>
        {order.length === 0 ? (
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
        )}
      </div>
    </div>
  );
}

export default Menu;
