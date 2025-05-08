const mongoose  = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDb = async () => {
    await Listing.deleteMany({});

    // Add a common geometry to all listings
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: "68136ec337c3e22495992da2",
        geometry: {
            type: "Point",
            coordinates: [77.5946, 12.9716]  // Default coordinates (latitude, longitude) for all listings
        }
    }));

    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDb();