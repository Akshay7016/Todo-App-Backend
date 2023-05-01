require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Database connection successful")
        })
        .catch((error) => {
            console.log("Error in database connection: ", error);
        })

}

module.exports = dbConnect;