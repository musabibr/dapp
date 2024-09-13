const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.all("*", (req, res, next) => {
    res.status(404 || 401).json({
        status: "fail",
        method: `${req.method}`,
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});

module.exports = app;
