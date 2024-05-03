const mongoose = require('mongoose');

const spaSchema = new mongoose.Schema({
    spa: {type: String, required: true},
    cosmeticIdeas: {type: String, required: true},
    indoorSpa: {type: String, required: true},
    outdoorSpa: {type: String, required: true},
    pools: {type: String, required: true},
    beautySalon: {type: String, required: true},
});

const Spa = new mongoose.model('Spa', spaSchema);

module.exports = Spa;