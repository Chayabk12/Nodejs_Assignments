const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    Customer_Name: String,
    customerId : Number,
   Mobile_number: Number,
   Date_of_birth: Date,
   age: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', Schema);