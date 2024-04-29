const mongoose = require('mongoose');
const VipApart = require('../../models/VipApart');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function vipApartReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } = req.body;

    try {
       await VipApart.updateOne({ $set: { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } });
       res.redirect('/admin/vipApart');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { vipApartReq }