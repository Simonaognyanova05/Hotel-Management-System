const mongoose = require('mongoose');
const Lobby = require('../../models/Lobby');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getLobby(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const lobby = (await Lobby.findOne()).toJSON();
        return lobby;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getLobby }