

const express = require('express');
const app = express();

const BodyParser = require('body-parser');

app.use(BodyParser.json());

app.listen(3001, () =>
{
    console.log("Server Start ho gaya bhai ");
});

app.get('/', (Request, Response) =>
{
    Response.send("Hello guys i am shubham kumar");
})

app.post('/api/cars', (Request, Response) =>
{
    const {name, brand} = Request.body;
    console.log(name);
    console.log(brand);
    Response.send("Car submitted successfully"); 
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Games', {
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection is successfull Bhai")).catch((Error) => "Bhaiya error aa gaye");