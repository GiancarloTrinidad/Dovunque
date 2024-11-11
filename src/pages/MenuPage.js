import React, { useState } from 'react';
import '../styles/Menu.css';

// Sample Menu Data
const menuItems = [
  { id: 1, name: 'Fried Mozzarella', price: 350.00, description: 'Breaded and Deep Fried Mozzarella Cheese' },
  { id: 2, name: 'Fried Calamari', price: 450.00, description: 'Breaded and Deep Fried Squid' },
  { id: 3, name: 'Chicken Alfredo', price: 600.00, description: 'Chicken Cutlet and Alfredo Sauce on Fettuccine Pasta' },
  { id: 4, name: 'Fettuccine Alfredo', price: 500.00, description: 'Classic Alfredo Sauce on Fettuccine Pasta' },
  { id: 5, name: 'Shrimp Alfredo', price: 675.00, description: 'Shrimp and Alfredo Sauce on Fettuccine Pasta' },
  { id: 6, name: 'Chicken Carbonara', price: 650.00, description: 'Chicken Cutlet and Creamy Carbonara Sauce on Fettuccine Pasta' },
  { id: 7, name: 'Classic Carbonara', price: 550.00, description: 'Creamy Carbonara Sauce on Fettuccine Pasta' },
  { id: 8, name: 'Chicken Parmesan', price: 650.00, description: 'Chicken Cutlet and Marinara Sauce on Fettuccine Pasta' },
  { id: 9, name: 'Chicken Scampi', price: 650.00, description: 'Sliced Chicken Cutlet with garlic butter and white wine reduction on Fettuccine Pasta' },
  { id: 10, name: 'Shrimp Scampi', price: 700.00, description: 'Shrimp with garlic butter and white wine reduction on Fettuccine Pasta' },
  { id: 11, name: 'Lasagna', price: 600.00, description: 'with Meat Sauce and Ricotta Cheese' },
  { id: 12, name: 'Margherita Pizza', price: 800.00, description: 'Basil, Tomato, and Mozzarella' },
  { id: 13, name: 'Chicken Alfredo Pizza', price: 850.00, description: 'Sliced Chicken cutlet with Alfredo Sauce' },
  { id: 14, name: 'Four Cheese Pizza', price: 800.00, description: 'Mozzarella, Cheddar, Blue Cheese, and Monterey Jack' },
  { id: 15, name: 'Meat Lovers Pizza', price: 850.00, description: 'Ground Beef, Salami, Sausage, Pan-Seared Chicken' },
  { id: 16, name: 'Tiramisu', price: 280.00, description: 'Ladyfinger Pastry with Coffee and Cream' },
  { id: 17, name: 'Cheesecake', price: 300.00, description: 'New York Style, Baked with Cream Cheese' },
  { id: 18, name: 'Espresso', price: 200.00, description: 'Bold. Strong. Awooga!' },
  { id: 19, name: 'Cappuccino', price: 250.00, description: 'Espresso with Steamed Milk' },
  { id: 20, name: 'Cafelatte', price: 300.00, description: 'Espresso with Milk' },
  { id: 21, name: 'Macchiato', price: 225.00, description: 'Espresso with splash of milk' },
  { id: 22, name: 'Affogato', price: 380.00, description: 'Espresso poured on top of ice cream' },
  { id: 23, name: '24K Gold Affogato', price: 24000.00, description: 'Affogato with 24k Gold Leaf' }
];

const MenuPage = () => {
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
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">Php {item.price.toFixed(2)}</p>
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
};

export default MenuPage;
