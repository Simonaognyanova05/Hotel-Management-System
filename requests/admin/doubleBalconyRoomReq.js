const mongoose = require('mongoose');
const DoubleBalconyRoom = require('../../models/DoubleBalcomyRoom');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function doubleBalconyRoomReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } = req.body;

    try {
       await DoubleBalconyRoom.updateOne({ $set: { info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5 } });
       
    //    const double = new DoubleBalconyRoom({
    //     info, capacity, roomSize, terrace, privateBathroom, view, pets, discounts, img1, img2, img3, img4, img5
    //    })
    //    await double.save();
       res.redirect('/admin/doubleBalcony');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { doubleBalconyRoomReq }