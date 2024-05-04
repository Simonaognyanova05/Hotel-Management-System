const mongoose = require('mongoose');
const DoubleDelux = require('../../models/DoubleDelux');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDoubleDeluxRoom(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const doubleDeluxRoom = (await DoubleDelux.findOne()).toJSON();
        return doubleDeluxRoom;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getDoubleDeluxRoom }