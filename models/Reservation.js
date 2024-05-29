const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    names: { type: String, required: true },
    typeOfRoom: { type: String, required: true },
    startData: { type: String, required: true },
    endData: { type: String, required: true },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;