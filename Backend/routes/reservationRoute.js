const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();

// Add a product (you can test this route with Postman)
router.post('/reserve', async (req, res) => {
    const { reservename, phoneNumber, guestCount, reserveDate, reserveTime } = req.body;

    try {
        const newReservation = new Reservation({ reservename, phoneNumber, guestCount, reserveDate, reserveTime });
        await newReserve.save();
        res.status(201).json(newReserve);

    } 
    catch (error) {
        res.status(400).json({ message: error.message });
    }

});

module.exports = router;