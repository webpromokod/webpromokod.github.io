const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/save', (req, res) => {
    const data = req.body;

    // Convert data to string
    const dataString = JSON.stringify(data);

    // Save data to data.txt file
    fs.writeFile('data.txt', dataString, (err) => {
        if (err) throw err;
        console.log('Data saved to data.txt');
        res.send('Data saved successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
