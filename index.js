const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save', (req, res) => {
    const data = {
        input1: req.body.input1,
        input2: req.body.input2,
    };

    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile('data.json', jsonData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Data saved successfully.');
            res.send('Data saved successfully.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

