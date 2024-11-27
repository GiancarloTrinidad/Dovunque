const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require("./routes/auth");
const reservationRoute = require("./routes/reservationRoute")
const reservationModel = require('./models/Reservation')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/reservations', reservationRoute);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/dovunque', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.use("/api/auth", authRoutes);
    //app.use("/api/reserve", reservationRoute);
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
        console.log('Server running on port 5000');
    });

}).catch(err => console.log(err));
