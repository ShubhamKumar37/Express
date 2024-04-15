const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/database");
const Route = require("./routes/todoRoute");

app.use(express.json());
app.listen(process.env.PORT, () =>
{
    console.log(`Server is started at port number ${process.env.PORT}`);
});

app.get('/', (req, res) =>
{
    res.send("<h1>Hi this is me shubham </h1>");
});

app.use("/api/v1", Route);

dbConnect();