// Connect to MongoDB instance
require('./models/db');

// Require express and ejs
const express = require('express');
const app = express();
let ejs = require('ejs');
const setup = require('./tools/setup');

var seats = setup.seats;
const mappings = setup.mappings;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/trains/:trainNo',(req,res)=>{
    const trainNo = req.params.trainNo;
    res.render('./table.ejs', {trainNo});
});

app.get('/trains/:trainNo/status', (req, res) => {
    res.json(seats);
})

app.get('/trains/:trainNo/:aNo/:status/mark', (req, res) => {
    const trainNo = req.params.trainNo;
    const aNo = req.params.aNo;
	console.log(aNo);
    const status = req.params.status;
    if (aNo in mappings) {
        seats[mappings[aNo]-1] = status;
        res.send(mappings[aNo].toString());
    } else {
        res.send('invalid');
    }
});

app.get('/', (req, res) => {
    res.redirect('/trains/123');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
})
