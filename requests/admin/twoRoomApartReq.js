const mongoose = require('mongoose');
const TwoRoomApart = require('../../models/TwoRoomApart');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function twoRoomApartReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } = req.body;

    try {
       //await TwoRoomApart.updateOne({ $set: { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } });
       //res.redirect('/admin/twoRoomApart');
       
       const double = new TwoRoomApart({
        info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5
       })
       await double.save();
    } catch (e) {
        console.log(e);
    }
}

module.exports = { twoRoomApartReq }