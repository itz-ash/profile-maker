const express = require("express");
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('this is my goofy app');
});

app.get('/about', (req, res) => {
    res.status(200).send('this is my goofy about app');
});

app.post('/about', (req, res) => {
    res.send('this is my post req goofy about app');
});

app.listen(port, () => {
    console.log(`this goofy app started sucessfully on ${port}`);
})