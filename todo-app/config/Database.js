const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () =>
{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Connection with database is successfull")).catch((Error) => console.log("There is a error in connection string of database"));
}

module.exports = dbConnect;