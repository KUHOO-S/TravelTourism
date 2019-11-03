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
    '669279913306': 5,
    '862102530736': 9,
}

module.exports = {
    seats,
    mappings
}
