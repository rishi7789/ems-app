const mongoose = require("mongoose")
// require('dotenv').config()

const connectdb = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URL)
        await mongoose.connect("mongodb://localhost:27017/employee")
        console.log("Database connected");



    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectdb;