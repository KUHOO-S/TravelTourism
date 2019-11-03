var express = require('express');
var app = express();
let ejs = require('ejs');


var seats = [];
for (let i = 0; i < 105; i++) {
    seats.push('vacant');
}

for (let i = 0; i < 20; i++) {
    const num = Math.floor(Math.random() * 105);
    if (!(num > 0 && num < 10)) {
    	seats[num] = 'occupied';
    }
}

const mappings = {
	'669279913306': 5
}

// vacant, occupied or unbooked
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

app.listen(3000, () => {
    console.log("Server is running");
})
