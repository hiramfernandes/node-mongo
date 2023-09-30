const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    purchaseDate: { type: Date, required: true },
    vendorName: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    items: { 
            itemName: { type: String, required: false },
            itemAmount: { type: Number, required: false },
    },        
    url: { type: String, required: false }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
