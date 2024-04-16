const express =  require("express");
const app = express();
const dbConnectionString = require("./Config/database");
const Router = require("./Routes/blogRoute");
require("dotenv").config();

app.use(express.json());

app.listen(process.env.PORT, () =>
{
    console.log(`Server is live on port number ${process.env.PORT}`);
});

app.use("/blog", Router);

app.get('/', (req, res) =>  
{
    res.send("<h1>Hi this is blog post project express</h1>");
});

dbConnectionString();