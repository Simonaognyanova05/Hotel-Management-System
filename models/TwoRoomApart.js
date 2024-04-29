const mongoose = require('mongoose');

const twoRoomApartSchema = new mongoose.Schema({
    info: {type: String, required: true},
    capacity: {type: String, required: true},
    roomSize: {type: String, required: true},
    terrace: {type: String, required: true},
    privateBathroom: {type: String, required: true},
    view: {type: String, required: true},
    pets: {type: String, required: true},
    discounts: {type: String, required: true},
    img1: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    img4: {type: String, required: true},
    img5: {type: String, required: true},
});

const TwoRoomApart = new mongoose.model('TwoRoomApart', twoRoomApartSchema);

module.exports = TwoRoomApart;