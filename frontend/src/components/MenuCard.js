import React from 'react';
import '../styles/Menu.css';

const MenuCard = ({ product, addToCart }) => {
  return (
    <div className="menu-item">
        <div className="menu-item-content">
            <img src={product.image} alt={product.name} />
            <h2 className="fw-bold">{product.name}</h2>
            <p>{product.description}</p>
        </div>
        <div className="menu-item-footer">
            <p className="price">₱{product.price.toFixed(2)}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
  );
};

export default MenuCard;