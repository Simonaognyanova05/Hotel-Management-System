const mongoose = require('mongoose');
const PresidentApart = require('../../models/PresidentApart');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function presidentApartReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } = req.body;

    try {
       await PresidentApart.updateOne({ $set: { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } });
       res.redirect('/admin/presidentApart');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { presidentApartReq }