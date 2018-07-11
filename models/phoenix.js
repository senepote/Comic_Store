const mongoose = require('mongoose');

const phoenixSchema = new mongoose.Schema({
    img: String
});

const Phoenix = mongoose.model('Phoenix', phoenixSchema);

module.exports = Phoenix;
