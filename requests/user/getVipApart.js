const mongoose = require('mongoose');
const VipApart = require('../../models/VipApart');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getVipApart(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const vipApart = (await VipApart.findOne()).toJSON();
        return vipApart;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getVipApart }