const mongoose = require('mongoose');
const TwoRoomApart = require('../../models/TwoRoomApart');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getTwoRoomsApart(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const twoRoomsApart = (await TwoRoomApart.findOne()).toJSON();
        return twoRoomsApart;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getTwoRoomsApart }