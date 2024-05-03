const mongoose = require('mongoose');
const Summerbar = require('../../models/Summerbar');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function summerbarReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = req.body;

    try {
        await Summerbar.updateOne({ $set: { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } });
        res.redirect('/admin/summerBar');
    } catch (e) {

    }
}
module.exports = { summerbarReq }