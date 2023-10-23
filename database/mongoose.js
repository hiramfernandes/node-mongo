const mongoose = require('mongoose');

const Purchase = require('../models/purchase');

if (!process.env.MONGO_USER || !process.env.MONGO_PASSWORD || !process.env.MONGO_DEFAULT_DATABASE)
    console.log('Db connection settings missing from process.env');

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.1pcm5ed.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`

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
