const mongoose = require('mongoose'); // Erase if already required

var seatSchema = new mongoose.Schema({
    seat: Number,
    passenger: String,
});

//Export the model
module.exports = mongoose.model('Seat', seatSchema);