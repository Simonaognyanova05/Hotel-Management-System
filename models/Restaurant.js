const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    breakfast1: {type: String, required: true},
    descriptionBreakfast1: {type: String, required: true},
    imgBrakfast1: {type: String, required: true},
    breakfast2: {type: String, required: true},
    descriptionBreakfast2: {type: String, required: true},
    imgBrakfast2: {type: String, required: true},
    breakfast3: {type: String, required: true},
    descriptionBreakfast3: {type: String, required: true},
    imgBrakfast3: {type: String, required: true},
    lunch1: {type: String, required: true},
    descriptionLunch1: {type: String, required: true},
    imgLunch1: {type: String, required: true},
    lunch2: {type: String, required: true},
    descriptionLunch2: {type: String, required: true},
    imgLunch2: {type: String, required: true},
    lunch3: {type: String, required: true},
    descriptionLunch3: {type: String, required: true},
    imgLunch3: {type: String, required: true},
    dinner1: {type: String, required: true},
    descriptionDinner1: {type: String, required: true},
    imgDinner1: {type: String, required: true},
    dinner2: {type: String, required: true},
    descriptionDinner2: {type: String, required: true},
    imgDinner2: {type: String, required: true},
    dinner3: {type: String, required: true},
    descriptionDinner3: {type: String, required: true},
    imgDinner3: {type: String, required: true},
});

const Restaurant = new mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;