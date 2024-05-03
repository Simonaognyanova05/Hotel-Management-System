const mongoose = require('mongoose');
const Children = require('../../models/Children');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function childrenReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const {
        entertainment1, description1, entertainment2, description2, entertainment3, description3, entertainment4, description4
    } = req.body;

    try {
        await Children.updateOne({
            $set: {
                entertainment1, description1, entertainment2, description2, entertainment3, description3, entertainment4, description4 
            }
        });
        res.redirect('/admin/children');
    } catch (e) {

    }
}
module.exports = { childrenReq }