const mongoose = require('mongoose');
const Spa = require('../../models/Spa');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function spaReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const {
        spa, cosmeticIdeas, indoorSpa, outdoorSpa, pools, beautySalon } = req.body;

    try {
        await Spa.updateOne({
            $set: {
                spa, cosmeticIdeas, indoorSpa, outdoorSpa, pools, beautySalon
            }
        });
        res.redirect('/admin/spa');
    } catch (e) {

    }
}
module.exports = { spaReq }