const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    description: {type: String, required: true},
});

const Event = new mongoose.model('Event', eventsSchema);

module.exports = Event;