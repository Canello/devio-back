const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongo;

// Start an instance of mongodb in memory for tests
beforeAll(async () => {
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {});
});

// Empty mongodb before each test
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

// Shut down mongodb in memory instance
afterAll(async () => {
    if (mongo) await mongo.stop();
    await mongoose.connection.close();
});
