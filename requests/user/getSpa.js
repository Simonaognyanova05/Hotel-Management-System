const mongoose = require('mongoose');
const Spa = require('../../models/Spa');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getSpa(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const spa = (await Spa.findOne()).toJSON();
        return spa;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getSpa }