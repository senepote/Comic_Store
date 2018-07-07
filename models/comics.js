const mongoose = require('mongoose');

const comicsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

const Comic = mongoose.model('Comic', comicsSchema);

module.exports = Comic;
