const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    time: { type: [String], required: true },
    price: { type: Number, required: true },
    date: { type: [String], required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Category' },
    city_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'City' },
    tickets_total: { type: Number, required: true },
    tickets_remaining: { type: Number, required: true },
    times_clicked: { type: Number, required: true },
    description: { type: String, required: true }
});


const Event = mongoose.model('Event', eventSchema);
module.exports = Event;



