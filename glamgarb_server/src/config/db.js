// mongoose.connect("mongodb://127.0.0.1:27017/glamgarb");

const mongoose = require("mongoose");

const mongodbURL = ("mongodb://127.0.0.1:27017/ecommerce_project_glamgarb");

const connectDb = async () => {
    try {
    console.log('Connected to MongoDB');
    return await mongoose.connect(mongodbURL);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = {connectDb}