const MongoClient = require('mongodb').MongoClient;

const savePurchase = async (req, res, next) => {
    const url = process.env.MONGODB_CONNECTION_URL || 'not found';
    const client = new MongoClient(url);

    const newPurchase = {
        purchaseDate: '2023-09-23',
        anotherProperty: 'yet some other data'
    };

    try{
        await client.connect();
        const db = client.db('control');
        const result = db.collection('purchases').insertOne(newPurchase);

    } catch (error) {
        res.json({message: `Could not insert product: ${error}`});
        return;
    }
    // client.close();

    res.json(newPurchase);
}

const getPurchases = async (req, res, next) => {};

exports.savePurchase = savePurchase;
exports.getPurchases = getPurchases;
