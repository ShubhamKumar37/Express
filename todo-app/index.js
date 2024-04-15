const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const todoRoute = require("./Routes/todo");
app.use("/api/v1", todoRoute);

app.listen(process.env.PORT, () =>
{
    console.log(`Server is live on port number ${process.env.PORT}`);
});

const dbConnect = require("./Config/database");
dbConnect();

app.get("/", (req, res) =>
{
    res.send("<h1>hi now i created this server</h1>");
});
