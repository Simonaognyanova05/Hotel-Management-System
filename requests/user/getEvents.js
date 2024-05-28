const mongoose = require('mongoose');
const Events = require('../../models/Events');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getEvents(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const events = (await Events.findOne()).toJSON();
        return events;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getEvents }