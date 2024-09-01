const express = require('express');

const initializeExpressServer = (port) => {
    const app = express();

    app.get('/', (req, res) => {
        res.send('zensware.rpc is running!');
    });

    app.listen(port, () => {
        console.log(`Your web-service is running on port ${port}`);
    });

    return app;
};

module.exports = initializeExpressServer;
