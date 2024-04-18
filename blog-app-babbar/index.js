const express = require("express");
const app = express();
const dbConnectionString = require("./config/database");
const Route = require("./routes/blog");
require("dotenv").config();

app.listen(process.env.PORT, () =>
{
    console.log(`Server is live on port number ${process.env.PORT}`);
});

app.use(express.json());

app.get('/', (req, res) =>  
{
    res.send("<h1>hi i am shubham kumar and i started this server</h1>");
});

app.use("/api/v1", Route);

dbConnectionString();

// simple meaning of mounting is addition