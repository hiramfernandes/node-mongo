const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Vendor', purchaseSchema);
