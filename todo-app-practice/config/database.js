const mongoose = require("mongoose");
require("dotenv").config();

function dbConnect()
{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Database connected successfully")).catch((Error) => console.log("There is error in connecton strinig"));
}

module.exports = dbConnect;