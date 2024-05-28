const mongoose = require('mongoose');
const Children = require('../../models/Children');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getChildren(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    try{
        const children = (await Children.findOne()).toJSON();
        return children;
    }catch(e){
        console.log(e);
    }
}

module.exports = { getChildren }