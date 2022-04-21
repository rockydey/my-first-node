const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi, I am using Nodemon");
});

const users = [
    { id: 1, name: "Rocky", email: "rocky@gmail.com", phone: '01678888888' },
    { id: 2, name: "Arif", email: "arif@gmail.com", phone: '01678888889' },
    { id: 3, name: "Robin", email: "robin@gmail.com", phone: '01678888880' },
    { id: 4, name: "Kabbo", email: "kabbo@gmail.com", phone: '01678888881' },
    { id: 5, name: "Ovy", email: "ovy@gmail.com", phone: '01678888882' },
    { id: 6, name: "Imtiaz", email: "imtiaz@gmail.com", phone: '01678888883' },
    { id: 7, name: "Pranjal", email: "pranjal@gmail.com", phone: '01678888884' }
];

app.get('/users', (req, res) => {
    // filter by search query
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Listing Your Code ${port}`);
});