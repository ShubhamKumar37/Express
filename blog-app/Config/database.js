const mongoose = require("mongoose");

function dbConnectionString()
{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Database is connected successfully")).catch((Error) => console.log("Error in database connection string"));  
}

module.exports = dbConnectionString;