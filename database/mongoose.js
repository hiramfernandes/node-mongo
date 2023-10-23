const mongoose = require('mongoose');

const Purchase = require('../models/purchase');

if (!process.env.MONGODB_CONNECTION_URL)
    console.log('Lack of mongo db connection found on process.env');

const url = process.env.MONGODB_CONNECTION_URL;

mongoose
    .connect(url)
    .then(() => console.log('Connected by Mongoose Succeeded'))
    .catch((error) => console.log(`Connected by Mongoose Failed (${error})`));

const createPurchase = async (req, res, next) => {
    const createdPurchase = new Purchase({
        purchaseDate: req.body.purchaseDate,
        vendorName: req.body.vendorName,
        totalAmount: req.body.totalAmount,
        items: req.body.items,
        url: req.body.url,
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
