const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    purchaseDate: { type: Date, required: true },
    vendorName:  { type: String, required: true }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
