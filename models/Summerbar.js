const mongoose = require('mongoose');

const summerBarSchema = new mongoose.Schema({
    img1: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    img4: {type: String, required: true},
    img5: {type: String, required: true},
    img6: {type: String, required: true},
    img7: {type: String, required: true},
    img8: {type: String, required: true},
    img9: {type: String, required: true},
    img10: {type: String, required: true},
});

const Summberbar = new mongoose.model('Summberbar', summerBarSchema);

module.exports = Summberbar;