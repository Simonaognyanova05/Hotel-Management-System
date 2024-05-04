const mongoose = require('mongoose');
const Banquet = require('../../models/Banquet');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function banquetReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const {
        description, proposal1, descriptionProp1, proposal2, descriptionProp2, proposal3, descriptionProp3, proposal4, descriptionProp4
    } = req.body;

    try {
        await Banquet.updateOne({
            $set: {
                description, proposal1, descriptionProp1, proposal2, descriptionProp2, proposal3, descriptionProp3, proposal4, descriptionProp4
            }
        });
        res.redirect('/admin/banquetHall');
    } catch (e) {
        console.log(e);
    }
}
module.exports = { banquetReq }