const express = require('express');
const CartItem = require('../models/cartModel');
const Product = require('../models/productModel'); // Make sure to import your Product model
const router = express.Router();

// Get Cart
router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItem.find().populate('productId'); // Populate to get product details
        res.json(cartItems);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Remove from Cart
router.post('/remove', async (req, res) => {
    const { productId } = req.body;

    try {
        await CartItem.deleteOne({ productId }); // Remove item by productId
        const cartItems = await CartItem.find().populate('productId');
        res.json(cartItems);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add to Cart
router.post('/add', async (req, res) => {
    const { productId } = req.body;

    try {
        const existingItem = await CartItem.findOne({ productId });

        if (existingItem) {
            existingItem.quantity += 1;
            await existingItem.save();
        } 
        else {
            const newCartItem = new CartItem({ productId });
            await newCartItem.save();
        }

        // Return updated cart
        const cartItems = await CartItem.find().populate('productId');
        res.json(cartItems);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }

});

// Increase Quantity
router.post('/increase', async (req, res) => {
    const { productId } = req.body;
  
    try {
      const existingItem = await CartItem.findOne({ productId });
  
      if (existingItem) {
        existingItem.quantity += 1; // Increment the quantity
        await existingItem.save();
      }
  
      const cartItems = await CartItem.find().populate('productId'); // Return updated cart
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  
  // Decrease Quantity
  router.post('/decrease', async (req, res) => {
    const { productId } = req.body;
  
    try {
      const existingItem = await CartItem.findOne({ productId });
  
      if (existingItem) {
        existingItem.quantity -= 1; // Decrement the quantity
        if (existingItem.quantity <= 0) {
          await CartItem.deleteOne({ productId }); // Remove the item if quantity reaches 0
        } else {
          await existingItem.save();
        }
      }
  
      const cartItems = await CartItem.find().populate('productId'); // Return updated cart
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router;