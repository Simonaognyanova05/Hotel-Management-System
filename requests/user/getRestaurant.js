const mongoose = require('mongoose');
const Restaurant = require('../../models/Restaurant');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getRestaurant(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const restaurant = (await Restaurant.findOne()).toJSON();
        return restaurant;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getRestaurant }