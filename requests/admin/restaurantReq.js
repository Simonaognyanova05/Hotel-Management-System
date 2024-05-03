const mongoose = require('mongoose');
const Restaurant = require('../../models/Restaurant');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function restaurantReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { breakfast1, descriptionBreakfast1, imgBrakfast1, breakfast2, descriptionBreakfast2, imgBrakfast2, breakfast3, descriptionBreakfast3, imgBrakfast3, lunch1, descriptionLunch1, imgLunch1, lunch2, descriptionLunch2, imgLunch2, lunch3, descriptionLunch3, imgLunch3, dinner1, descriptionDinner1, imgDinner1, dinner2, descriptionDinner2, imgDinner2, dinner3, descriptionDinner3, imgDinner3 } = req.body;

    try {
        await Restaurant.updateOne({ $set: { breakfast1, descriptionBreakfast1, imgBrakfast1, breakfast2, descriptionBreakfast2, imgBrakfast2, breakfast3, descriptionBreakfast3, imgBrakfast3, lunch1, descriptionLunch1, imgLunch1, lunch2, descriptionLunch2, imgLunch2, lunch3, descriptionLunch3, imgLunch3, dinner1, descriptionDinner1, imgDinner1, dinner2, descriptionDinner2, imgDinner2, dinner3, descriptionDinner3, imgDinner3 } });

        res.redirect('/admin/restaurant');
    } catch (e) {

    }
}
module.exports = { restaurantReq }