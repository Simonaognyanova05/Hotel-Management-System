const mongoose = require('mongoose');

const banquetSchema = new mongoose.Schema({
    description: {type: String, required: true},
    proposal1: {type: String, required: true},
    descriptionProp1: {type: String, required: true},
    proposal2: {type: String, required: true},
    descriptionProp2: {type: String, required: true},
    proposal3: {type: String, required: true},
    descriptionProp3: {type: String, required: true},
    proposal4: {type: String, required: true},
    descriptionProp4: {type: String, required: true},
});

const Banquet = new mongoose.model('Banquet', banquetSchema);

module.exports = Banquet;