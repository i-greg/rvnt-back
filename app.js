const express = require('express');
const app = express();
const { nextTick } = require('process');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eventRoutes = require('./api/routes/events');
const orderRoutes = require('./api/routes/orders');


mongoose.connect('mongodb+srv://Rvnt-Api-DB:S45DAO402K0DIaFI@rvnt-api-db.2rrhvdu.mongodb.net/?retryWrites=true&w=majority');


//bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//handling CORS errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//request routes
app.use('/events', eventRoutes);
app.use('/orders', orderRoutes);

//error hanlding
app.use((req, res, next) =>{
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;