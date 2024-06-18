const mongoose = require('mongoose');
const DoubleRoom = require('../../models/DoubleRoom');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function doubleRoomReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5, img6 } = req.body;

    try {
        await DoubleRoom.updateOne({ $set: { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5, img6 } });
        res.redirect('/admin/double');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { doubleRoomReq }