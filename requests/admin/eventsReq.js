const mongoose = require('mongoose');
const Events = require('../../models/Events');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function eventsReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const {
        description } = req.body;

    try {
        await Events.updateOne({
            $set: {
                description
            }
        });
        res.redirect('/admin/events');
    } catch (e) {
        console.log(e);
    }
}
module.exports = { eventsReq }