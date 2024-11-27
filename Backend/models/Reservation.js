const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  reservename: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  guestCount: { type: String, required: true },
  reserveDate: { type: String, required: true },
  reserveTime: { type: String, required: true }
});


const reservationModel = mongoose.model("Reservation", reservationSchema);
module.exports = reservationModel;