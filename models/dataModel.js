// models/dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    selectedPackage: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    selectedAssets: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;