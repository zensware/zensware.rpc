const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Website', 'index.html'));
});

function run() {
    app.listen(8080, '0.0.0.0', () => {
        console.log('Zenith is now hosting!');
    });
}

function keepAlive() {
    run();
}

keepAlive();
