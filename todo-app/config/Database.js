

const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("DB Connection is successful and i am shubham kumar")).catch((Error) => {
        console.log("This is the error kk", Error);
        process.exit(1)
    });
};

module.exports = dbConnect;