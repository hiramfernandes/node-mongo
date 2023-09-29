const mongoose = require('mongoose');

const Purchase = require('../models/purchase');
const url = process.env.MONGODB_CONNECTION_URL;
mongoose
    .connect(url)
    .then(() => console.log('Connected by Mongoose Succeeded'))
    .catch(() => console.log('Connected by Mongoose Failed'));

const createPurchase = async (req, res, next) => {
    const createdPurchase = new Purchase({
        purchaseDate: req.body.purchaseDate,
        vendorName: req.body.vendorName
    })

    const result = await createdPurchase.save();

    res.json(result);
};

const getPurchases = async (req, res, next) => {
    const purchases = await Purchase.find().exec();
    res.json(purchases);
}


exports.createPurchase = createPurchase;
exports.getPurchases = getPurchases;
