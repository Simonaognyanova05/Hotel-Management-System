const mongoose = require('mongoose');
const OneRoomApart = require('../../models/OneRoomApart');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getOneRoomApart(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const oneRoomApart = (await OneRoomApart.findOne()).toJSON();
        return oneRoomApart;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getOneRoomApart }