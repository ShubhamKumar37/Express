const mongoose = require("mongoose");
require("dotenv").config();

function dbConnectionString()
{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Database is connected")).catch((Error) => console.log(Error));
}

module.exports = dbConnectionString;