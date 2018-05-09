const express = require('express');
const file = require('fs');

let data = file.readFileSync('movies_series.json');
let movies_series = JSON.parse(data);

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/movies-series', (req, res) => {
    res.send({ movies_series: movies_series });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
