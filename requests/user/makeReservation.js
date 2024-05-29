const mongoose = require('mongoose');
const Reservation = require('../../models/Reservation');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function makeReservation(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    const { names, typeOfRoom, startData, endData } = req.body;
    try{
        const reservation = new Reservation({
            names, typeOfRoom, startData, endData
        });
        await reservation.save();
        res.redirect('/tenks');
    }catch(e){
        console.log(e);
    }
}

module.exports = { makeReservation }