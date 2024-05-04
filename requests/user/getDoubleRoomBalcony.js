const mongoose = require('mongoose');
const DoubleBalcomyRoom = require('../../models/DoubleBalcomyRoom');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDoubleBalconyRoom(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const doubleBalconyRoom = (await DoubleBalcomyRoom.findOne()).toJSON();
        return doubleBalconyRoom;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getDoubleBalconyRoom }