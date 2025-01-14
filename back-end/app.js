const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handler');

require('dotenv/config');

app.use(cors());
app.options('*', cors());

//middleware
app.use(bodyParser.json());
app.use(
    morgan(':method :url :status :response-time ms - :res[content-length]')
);
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

//routers
const booksRouter = require('./routers/books');
const categoriesRouter = require('./routers/categories');
const usersRouter = require('./routers/users');
const ordersRouter = require('./routers/orders');

const api = process.env.API_URL;

app.use(`${api}/books`, booksRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);

//database
mongoose
    .connect(process.env.CONNECTION_STRING, {})
    .then(() => {
        console.log('Database Connection is ready');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
    });

//server
app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
});
