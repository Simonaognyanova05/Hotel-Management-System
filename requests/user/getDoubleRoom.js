const mongoose = require('mongoose');
const DoubleRoom = require('../../models/DoubleRoom');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDoubleRoom(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const doubleRoom = (await DoubleRoom.findOne()).toJSON();
        return doubleRoom;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getDoubleRoom }