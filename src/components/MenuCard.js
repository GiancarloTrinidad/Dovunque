import React from 'react';

// import './ProductCard.css';

const MenuCard = ({ product, addToCart }) => {

  return (

    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₱{product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>

    </div>

  );

};

export default MenuCard;