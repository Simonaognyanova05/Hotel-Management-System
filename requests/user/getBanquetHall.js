const mongoose = require('mongoose');
const Banquet = require('../../models/Banquet');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getBanquet(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const banquet = (await Banquet.findOne()).toJSON();
        return banquet;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getBanquet }