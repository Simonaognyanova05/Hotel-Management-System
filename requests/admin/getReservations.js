const mongoose = require('mongoose');
const Reservation = require('../../models/Reservation');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getReservations(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const reservations = (await Reservation.find({})).map(x => x.toJSON());
        return reservations;
    }catch(e){
        console.log(e);
    }
};

module.exports = { getReservations }