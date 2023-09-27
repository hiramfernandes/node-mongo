const MongoClient = require('mongodb').MongoClient;

const savePurchase = async (req, res, next) => {
    const url = 'abc';
    const client = new MongoClient(url);

    try{
        await client.connect();
    } catch (error) {
        throw new Error(error.message);
    }
}