
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// const ShubhamMiddlerWare = (req, res, next) =>
// {
//     console.log(req);
//     console.log("we are hitting the page for no reason");
// };

// app.use(express.static(path.join(__dirname, "public")));
// app.use(ShubhamMiddlerWare);

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name);
})
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, "index.html")); 
  res.status(500);
  res.json({
    Title:"This is a game website"
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});