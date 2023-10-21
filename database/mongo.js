const MongoClient = require('mongodb').MongoClient;

if (!process.env.MONGODB_CONNECTION_URL)
    console.log('Lack of mongo db connection found on process.env');

const url = process.env.MONGODB_CONNECTION_URL || 'mongodb+srv://hiram:Hiram%40123@cluster0.1pcm5ed.mongodb.net/control?retryWrites=true&w=majority';

const client = new MongoClient(url);

const savePurchase = async (req, res, next) => {

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

    res.json(newPurchase);
}

const getPurchases = async (req, res, next) => {
    let purchases;
    try {
        await client.connect();
        const db = client.db('control');
        purchases = await db.collection('purchases').find().toArray();
    } catch (error) {
        res.json({message: `Error while trying to retrieve purchases: ${error}`});
        return;
    }

    res.json(purchases);
};

exports.savePurchase = savePurchase;
exports.getPurchases = getPurchases;
