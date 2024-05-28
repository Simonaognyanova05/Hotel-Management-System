const mongoose = require('mongoose');
const Summerbar = require('../../models/Summerbar');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getSummerBar(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const summerBar = (await Summerbar.findOne()).toJSON();
        return summerBar;
    }catch(e){
        console.log(e);
    }
};

module.exports = { getSummerBar }