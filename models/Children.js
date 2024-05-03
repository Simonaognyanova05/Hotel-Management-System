const mongoose = require('mongoose');

const childrenSchema = new mongoose.Schema({
    entertainment1: {type: String, required: true},
    description1: {type: String, required: true},
    entertainment2: {type: String, required: true},
    description2: {type: String, required: true},
    entertainment3: {type: String, required: true},
    description3: {type: String, required: true},
    entertainment4: {type: String, required: true},
    description4: {type: String, required: true},
});

const Children = new mongoose.model('Children', childrenSchema);

module.exports = Children;