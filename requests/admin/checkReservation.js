const mongoose = require('mongoose');
const Reservation = require('../../models/Reservation');

const dbUrl = 'mongodb://localhost:27017/hotel_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function checkReservationReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const reservationId = req.params._id;

    try {
        await Reservation.findOneAndDelete({ _id: reservationId });
        res.redirect('/admin/reservations');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { checkReservationReq };