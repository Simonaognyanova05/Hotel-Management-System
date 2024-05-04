const mongoose = require('mongoose');
const PresidentApart = require('../../models/PresidentApart');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getPresidentApart(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const presidentApart = (await PresidentApart.findOne()).toJSON();
        return presidentApart;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getPresidentApart }